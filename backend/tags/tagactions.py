from typing import List

from sqlalchemy.orm import Session

from backend.tags.tagmodels import Tag
from backend.tags.tagschemas import TagBaseSchema, TagSchema


def create_tag(db: Session, name):
    category = Tag(name=name)
    db.add(category)
    db.commit()

    return category


def tag_exists(db: Session, name):
    return db.query(db.query(Tag).filter_by(name=name).exists()).scalar()


def get_tag_by_name(db, name):
    return db.query(Tag).filter_by(name=name).first()


def get_tags(db: Session, skip: int, limit: int):
    return db.query(Tag).order_by(Tag.name.asc()).offset(skip).limit(limit).all()


def resolve_tags(db: Session, tags: List[TagBaseSchema]) -> List[TagSchema]:
    """
    This function accepts a list of tags and creates them
    in the database if these do not exist.

    The main intention behind this function is validation,
    to make sure that, that all tags in a list are valid.
    """
    db_tags = []
    for tag in tags:
        name = tag.name.lower()
        if not tag_exists(db, name):
            create_tag(db, name)
        db_tags.append(get_tag_by_name(db, name))
    return db_tags
