from fastapi import HTTPException
from sqlalchemy.orm import Session

from backend.users.useractions import get_users_query
from backend.users.usermodels import User
from backend.users.userschemas import UserOutputSchema


def get_suggestion(db: Session, user: User) -> UserOutputSchema:
    users = get_users_query(db)
    users = users.filter(User.email != user.email)
    if users.count() == 0:
        raise HTTPException(status_code=204, detail="No users found")
    first_user = None
    for tag in user.tags:
        first_user = users.first()
        users = users.filter(User.tags.contains(tag))
        users_count = users.count()
        if users_count == 1:
            return users.first()
        elif users_count == 0:
            return first_user
    return first_user