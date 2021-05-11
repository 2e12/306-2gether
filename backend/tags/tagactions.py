from typing import List

from sqlalchemy import func
from sqlalchemy.orm import Session

from backend.tags.tagmodels import Tag, tag_user_table
from backend.tags.tagschemas import TagBaseSchema, TagSchema


def create_tag(db: Session, name):
    category = Tag(name=name)
    db.add(category)
    db.commit()

    return category


def tag_exists(db: Session, name: str) -> bool:
    return db.query(db.query(Tag).filter_by(name=name).exists()).scalar()


def get_tag_by_name(db: Session, name: str) -> Tag:
    return db.query(Tag).filter_by(name=name).first()


def get_tag(db: Session, id: int) -> Tag:
    return db.query(Tag).filter_by(id=id).first()


def get_tags(db: Session, skip: int, limit: int) -> List[Tag]:
    return db.query(Tag).order_by(Tag.name.asc()).offset(skip).limit(limit).all()


def search_tags(db: Session, search_string: str) -> List[Tag]:
    data = db.query(Tag).filter(Tag.name.startswith(search_string.lower()))
    return data.order_by(Tag.usage.desc()).limit(10).all()


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


def count_tag_usage(db: Session):
    data = db.query(tag_user_table.c.tag_id, func.count(tag_user_table.c.tag_id)).group_by(tag_user_table.c.tag_id).all()
    for row in data:
        tag = get_tag(db, row[0])
        tag.usage = row[1]
        db.commit()
