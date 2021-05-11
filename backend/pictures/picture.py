import os
from typing import List
from sqlalchemy.orm import Session
from backend.pictures.picturemodel import Picture
from backend.users.usermodels import User
from fastapi import HTTPException, status
from backend.pictures.pictureschema import PictureBaseSchema, PictureSchema
from PIL import Image, UnidentifiedImageError


ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
picture_dir = os.path.join(ROOT_DIR, "images")


def create_picture(db: Session, user: User):
    picture = Picture()
    picture.user_id = user.id
    db.add(picture)
    db.commit()

    return picture


def update_picture(db: Session, picture: Picture, path):
    picture.path = path
    db.commit()
    return picture


def get_picture_by_id(db: Session, id: int):
    return db.query(Picture).filter_by(id=id).first()


def resolve_pictures(db: Session, images: List[PictureBaseSchema]):
    db_images = []
    for image in images:
        db_images.append(get_picture_by_id(db, image.id))
    return db_images


def upload_picture(db: Session, picture, user):
    try:
        picture = Image.open(picture.file)
    except UnidentifiedImageError:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail="Unsupported or malformed media type"
        )

    # new db picture entry
    new_picture = create_picture(db, user)

    # file system upload
    compact_picture = picture.convert('RGB')
    filename = str(new_picture.id) + ".jpg"

    file_location = os.path.join(picture_dir, filename)
    # save file in file system
    compact_picture.save(file_location)

    new_picture = update_picture(db, new_picture, filename)
    return new_picture
