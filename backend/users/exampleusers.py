import datetime

from sqlalchemy.orm import Session

from backend.users.useractions import create_user, user_exists
from backend.users.userschemas import UserCreateSchema


def create_example_users(db: Session, count: int = 4) -> None:
    for i in range(count):
        user = \
            {'birthdate': datetime.date(2001, 5, 9),
             'contact_options': [{'name': 'string', 'value': 'string'}],
             'description': 'string',
             'email': 'gibb{}@gibb.ch'.format(i),
             'firstname': 'demo user',
             'gender': 'male',
             'lastname': 'demo user',
             'password': 'sml12345',
             'tags': [{'name': 'demo'},
                      {'name': 'music'},
                      {'name': 'meditieren'},
                      {'name': 'netflix'},
                      {'name': 'skaten'},
                      {'name': 'skateboard'}],
             'username': 'gibb{}'.format(i)}
        user = UserCreateSchema.parse_obj(user)
        if not user_exists(db, user.username, user.email):
            create_user(db, user)
