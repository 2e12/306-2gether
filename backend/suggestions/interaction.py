from datetime import datetime

from sqlalchemy.orm import Session

from backend.suggestions.interactionmodel import Interaction
from backend.users.usermodels import User


def interact_with_user(db: Session, user: User, target_user: User, is_like: bool) -> Interaction:
    interaction: Interaction = get_interaction(db, user, target_user)
    if not interaction:
        interaction = Interaction()
        interaction.user = user.id
        interaction.target = target_user.id
        db.add(interaction)
    interaction.updated_on = datetime.now()
    interaction.is_like = is_like
    db.commit()
    return interaction


def get_interaction(db: Session, user: User, target_user: User) -> Interaction:
    return db.query(Interaction).filter(
        Interaction.user == user.id,
        Interaction.target == target_user.id
    ).first()