from fastapi_users.db import SQLAlchemyBaseUserTable, SQLAlchemyUserDatabase
from sqlalchemy import Column, String, Date, Enum

from backend import database
from backend.database import Base
from backend.users.schemas import UserDB


class UserTable(Base, SQLAlchemyBaseUserTable):
    username = Column('username', String(50), index=True)
    firstname = Column('firstname', String(50))
    lastname = Column('lastname', String(50), nullable=True)
    description = Column('description', String(800), nullable=True)
    birthdate = Column('birthday', Date)
    gender = Column("gender", Enum("female", "male", "undefined", name="gender_enum", create_type=False))
    pass


users = UserTable.__table__
user_db = SQLAlchemyUserDatabase(UserDB, database.database, users)
