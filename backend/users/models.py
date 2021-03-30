from fastapi_users.db import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase

from backend import database
from backend.database import Base
from backend.users.schemas import UserDB


class UserTable(Base, SQLAlchemyBaseUserTable):
    pass


users = UserTable.__table__
user_db = SQLAlchemyUserDatabase(UserDB, database.database, users)
