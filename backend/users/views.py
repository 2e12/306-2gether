import hashlib

from fastapi import HTTPException

from backend.users import models as user_model, schemas
from sqlalchemy.orm import Session

import re


def get_user(db: Session, user_id: int):
    return get_user_by_id(db, user_id)


def get_user_by_id(db: Session, user_id: int):
    return db.query(user_model.User).filter(user_model.User.id == user_id).first()


def get_user_by_username(db: Session, username: str):
    return db.query(user_model.User).filter(user_model.User.username == username).first()


def create_user(db: Session, user: schemas.UserRegisterSchema):
    if is_user_valid(db, user):
        new_user = user_model.User()
        new_user.username = user.username
        new_user.email = user.email
        new_user.password_hash = hashlib.sha256(user.password.encode()).hexdigest()
        db.add(new_user)
        db.commit()
        return new_user


def is_user_valid(db: Session, user: schemas.UserRegisterSchema):
    if len(user.password) < 8:
        raise HTTPException(status_code=422, detail="Password must be at least 8 characters long.")

    if len(user.username) < 4:
        raise HTTPException(status_code=422, detail="Username must be at least 4 characters long.")

    if not is_email_valid(user.email):
        raise HTTPException(status_code=422, detail="A valid E-Mail must be provided.")

    if user_exists(db, user.username, user.email):
        raise HTTPException(status_code=422, detail="A user with this email or username already exists.")

    return True


def user_exists(db: Session, username=None, mail=None):
    by_name = db.query(db.query(user_model.User).filter_by(username=username).exists()).scalar()
    by_mail = db.query(db.query(user_model.User).filter_by(email=mail).exists()).scalar()
    return by_mail | by_name


def is_email_valid(email):
    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    # Source https://www.geeksforgeeks.org/check-if-email-address-valid-or-not-in-python/
    return re.match(regex, email)
