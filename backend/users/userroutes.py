# Source for this file:
# https://github.com/2e12/sell2buy/blob/main/backend/users/routes.py
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter

from sqlalchemy.orm import Session

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBasic, HTTPBasicCredentials
import hashlib
import secrets

from backend.db_helpers import get_db
from backend.users.useractions import get_user_by_username, create_user, update_user, get_user_by_id, remove_user
from backend.users.usermodels import User
from backend.users.userschemas import UserCreateSchema, UserUpdateSchema, UserCompleteSchema

user_router = InferringRouter()
security = HTTPBasic()


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


@user_router.post(
    "/me",
    description="Create an new user."
)
def register_user(user: UserCreateSchema, db: Session = Depends(get_db)) -> UserCompleteSchema:
    return create_user(db, user)


@cbv(user_router)
class UserRoutes:
    db: Session = Depends(get_db)
    user: User = Depends(auth)

    @user_router.get(
        "/me",
        description="Returns the current authenticated user.",
        response_model=UserCompleteSchema
    )
    def get_current_user(self):
        return self.user

    @user_router.put(
        "/me",
        description="Updates the current authenticated user."
    )
    def update_current_user(self, user: UserUpdateSchema) -> UserCompleteSchema:
        return update_user(self.db, user, get_user_by_id(self.db, self.user.id))

    @user_router.delete(
        "/me",
        description="Deletes the current authenticated user."
    )
    def delete_current_user(self) -> str:
        remove_user(self.db, get_user_by_id(self.db, self.user.id))
        return 'success'
