from fastapi_users import models, FastAPIUsers
from fastapi_users.authentication import JWTAuthentication
from pydantic import validator

from backend.users.models import user_db
from backend.users.schemas import User, UserUpdate, UserCreate, UserDB

SECRET = "SECRET"


jwt_authentication = JWTAuthentication(secret=SECRET, lifetime_seconds=3600)

fastapi_users = FastAPIUsers(
    user_db,
    [jwt_authentication],
    User,
    UserCreate,
    UserUpdate,
    UserDB,
)


class UserCreate(models.BaseUserCreate):
    @validator('password')
    def valid_password(cls, v: str):
        if len(v) < 8:
            raise ValueError('Password should be at least 6 characters')
        return v
