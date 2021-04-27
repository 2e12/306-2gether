import datetime
from typing import Optional, List

from pydantic.main import BaseModel


class TagBaseSchema(BaseModel):
    name: str

    class Config:
        orm_mode = True


class TagSchema(TagBaseSchema):
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
    gender: str
    birthdate: datetime.date

    class Config:
        orm_mode = True


class UserOutputSchema(UserProfileSchema, UserBaseSchema):
    id: int
    pass


class UserCreateSchema(UserProfileSchema, UserBaseSchema):
    password: str
    tags: List[TagBaseSchema]


class UserUpdateSchema(UserCreateSchema):
    password: Optional[str] = None
    tags: List[TagBaseSchema]
