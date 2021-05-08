from typing import List

from sqlalchemy.orm import Session

from backend.users.usermodels import User, Contact
from backend.users.userschemas import ContactBaseSchema, ContactSchema


def set_contact(db: Session, name: str, value: str, user: User) -> Contact:
    contact = get_contact(db, name, user)
    if not contact:
        contact = Contact(name=name, user_id=user.id, value=value)
        db.add(contact)
        db.commit()
    else:
        contact.value = value
    return contact


def get_contact(db: Session, name: str, user: User) -> Contact:
    return db.query(Contact).filter(Contact.name==name, Contact.user_id==user.id).first()


def resolve_contacts(db: Session, contacts: List[ContactBaseSchema], user: User) -> List[Contact]:
    """
    This function accepts a list of contacts and creates them
    in the database if these do not exist.

    The main intention behind this function is validation,
    to make sure that, that all contacts in a list are valid.
    """
    db_contacts = []
    for contact in contacts:
        db_contacts.append(
            set_contact(
                db,
                contact.name,
                contact.value,
                user
            )
        )
    return db_contacts
