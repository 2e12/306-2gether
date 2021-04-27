# Source for this file:
# https://github.com/2e12/sell2buy/blob/main/backend/users/views.py
import datetime
import re
import hashlib

from fastapi import HTTPException
from pydantic.main import BaseModel
from sqlalchemy.ext.declarative import DeclarativeMeta

from sqlalchemy.orm import Session

from backend.db_helpers import create_db_object, apply_values_to_object
from backend.users.tags import resolve_tags
from backend.users.usermodels import User
from backend.users.userschemas import UserCreateSchema, UserUpdateSchema


def get_user(db: Session, user_id: int):
    return get_user_by_id(db, user_id)


def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()


def create_user(db: Session, user: UserCreateSchema):
    if is_user_valid(db, user):
        new_user = create_db_object(user, User, exclude_keys=['password_hash', 'tags'])
        new_user.password_hash = hashlib.sha256(user.password.encode()).hexdigest()
        new_user.tags = resolve_tags(db, user.tags)
        db.add(new_user)
        db.commit()
        return new_user


def update_user(db: Session, input_user: UserUpdateSchema, user: User):
    if is_user_valid(db, input_user, ignore_exist_check=True):
        user = apply_values_to_object(input_user, user, exclude_keys=[
            'password_hash',
            'tags',
            'email',
            'id',
            'username',
            'gender'
        ])

        if input_user.password:
            user.password_hash = hashlib.sha256(input_user.password.encode()).hexdigest()

        user.tags = resolve_tags(db, input_user.tags)
        db.commit()
        return user


def is_user_valid(db: Session, user: UserCreateSchema, ignore_exist_check=False):

    if user_exists(db, user.username, user.email) and not ignore_exist_check:
        raise HTTPException(status_code=422, detail="A user with this email or username already exists.")

    if user.password:
        if len(user.password) < 8:
            raise HTTPException(status_code=422, detail="Password must be at least 8 characters long.")

    if len(user.username) < 4:
        raise HTTPException(status_code=422, detail="Username must be at least 4 characters long.")

    if not is_email_valid(user.email):
        raise HTTPException(status_code=422, detail="A valid E-Mail must be provided.")

    if not is_age_valid(user.birthdate):
        raise HTTPException(status_code=422, detail="A age of at least 18 years is required to create an account.")

    return True


def user_exists(db: Session, username: str=None, mail: str=None) -> bool:
    by_name = db.query(db.query(User).filter_by(username=username).exists()).scalar()
    by_mail = db.query(db.query(User).filter_by(email=mail).exists()).scalar()
    return by_mail | by_name


def is_age_valid(birthdate: datetime.date, min_age: int = 18) -> bool:
    today = datetime.date.today()
    age = today - birthdate
    age = int(age.days / 365.25)
    return age >= min_age


def is_email_valid(email: str) -> bool:
    regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
    return re.match(regex, email)

