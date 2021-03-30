from typing import Optional

from fastapi_users import models
from pydantic.main import BaseModel
from datetime import date


class UserDetails(BaseModel):
    username: str = None
    firstname: str = None
    lastname: Optional[str] = None
    description: Optional[str] = None
    gender: str
    birthday: date


class User(UserDetails, models.BaseUser):
    pass


class UserCreate(UserDetails, models.BaseUserCreate):
    pass


class UserUpdate(User, models.BaseUserUpdate):
    pass


class UserDB(User, models.BaseUserDB):
    pass