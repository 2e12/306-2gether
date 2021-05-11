import datetime
from typing import Optional, List

from pydantic.main import BaseModel
from backend.pictures.pictureschema import PictureSchema, PictureBaseSchema

from backend.tags.tagschemas import TagBaseSchema, TagSchema


class ContactBaseSchema(BaseModel):
    name: str
    value: str

    class Config:
        orm_mode = True


class ContactSchema(ContactBaseSchema):
    id: Optional[int]


class UserBaseSchema(BaseModel):
    email: str
    username: str = None

    class Config:
        orm_mode = True


class UserProfileSchema(BaseModel):
    firstname: str = None
    lastname: str = None
    description: Optional[str] = None
    tags: List[TagSchema]
    pictures: List[PictureSchema]
    gender: str
    birthdate: datetime.date

    class Config:
        orm_mode = True


class UserOutputSchema(UserProfileSchema, UserBaseSchema):
    id: int


class UserCompleteSchema(UserOutputSchema):
    contact_options: List[ContactSchema]


class UserCreateSchema(UserProfileSchema, UserBaseSchema):
    password: str
    tags: List[TagBaseSchema]
    contact_options: List[ContactBaseSchema]
    pictures: List[PictureBaseSchema]


class UserUpdateSchema(UserCreateSchema):
    password: Optional[str] = None
    tags: List[TagBaseSchema]
    pictures: List[PictureBaseSchema]
