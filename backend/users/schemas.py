from pydantic import BaseModel


# Generic User

class UserBaseSchema(BaseModel):
    username: str
    email: str

    class Config:
        orm_mode = True


class UserSchema(UserBaseSchema):
    id: int


class UserRegisterSchema(UserBaseSchema):
    password: str
