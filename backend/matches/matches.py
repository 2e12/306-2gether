from typing import List

from sqlalchemy import true
from sqlalchemy.orm import Session

from backend.suggestions.interactionmodel import Interaction
from backend.users.useractions import get_user_by_id
from backend.users.usermodels import User


def get_matches(db: Session, user_id: int) -> List[User]:
    liked_users = db.query(
        Interaction
    ).filter(
        Interaction.is_like == true(),
        Interaction.user == user_id
    ).all()

    liked_users = [interaction.target for interaction in liked_users]

    liked_by = db.query(
        Interaction
    ).filter(
        Interaction.is_like == true(),
        Interaction.target == user_id,
        Interaction.user.in_(liked_users)
    ).all()


    return [get_user_by_id(db, interaction.user) for interaction in liked_by]
