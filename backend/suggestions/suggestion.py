import datetime

from fastapi import HTTPException
from sqlalchemy.orm import Session

from backend.suggestions.interactionmodel import Interaction
from backend.users.useractions import get_users_query
from backend.users.usermodels import User
from backend.users.userschemas import UserOutputSchema


def get_suggestion(db: Session, user: User) -> UserOutputSchema:
    # Filter interacted users
    start_time = datetime.date.today() - datetime.timedelta(days=2)
    already_interacted = db.query(Interaction.target).filter(Interaction.user == user.id and Interaction.updated_on >= start_time)
    users = get_users_query(db).filter(User.id.notin_(already_interacted))

    # Filter myself
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