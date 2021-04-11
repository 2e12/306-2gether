# Source for this file:
# https://github.com/2e12/sell2buy/blob/main/backend/users/routes.py

from fastapi_utils.inferring_router import InferringRouter

from sqlalchemy.orm import Session

from backend.database import SessionLocal
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import hashlib
import secrets

from backend.users.useractions import get_user_by_username, create_user
from backend.users.userschemas import UserOutputSchema, UserCreateSchema

user_router = InferringRouter()
security = HTTPBasic()


def get_db():
    db = SessionLocal()
    return db


def auth(credentials: HTTPBasicCredentials = Depends(security)):
    user = get_user_by_username(get_db(), credentials.username)

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


@user_router.get("/me", response_model=UserOutputSchema)
def get_current_user(user: UserOutputSchema = Depends(auth)):
    return user


@user_router.post("/me", response_model=UserOutputSchema)
def register_user(user: UserCreateSchema, db: Session = Depends(get_db)):
    return create_user(db, user)