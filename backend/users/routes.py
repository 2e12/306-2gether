from sqlalchemy.orm import Session

from backend.database import SessionLocal
from backend.users import schemas, views
from fastapi import Depends, HTTPException, APIRouter, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import hashlib
import secrets

from backend.users.views import create_user

user_router = APIRouter()
security = HTTPBasic()


# Dependency
def get_db():
    db = SessionLocal()
    return db


def auth(credentials: HTTPBasicCredentials = Depends(security)):
    user = views.get_user_by_username(get_db(), credentials.username)

    correct_password = False
    if user:
        password_hash = hashlib.sha256(credentials.password.encode()).hexdigest()
        correct_password = secrets.compare_digest(user.password_hash, password_hash)

    if not (user and correct_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Basic"},
        )
    return user


@user_router.get("/me", response_model=schemas.UserSchema)
def get_current_user(user: schemas.UserBaseSchema = Depends(auth)):
    return user


@user_router.post("/me", response_model=schemas.UserSchema)
def register_user(user: schemas.UserRegisterSchema, db: Session = Depends(get_db)):
    return create_user(db, user)

