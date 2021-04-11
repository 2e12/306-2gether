from sqlalchemy.orm import relationship

from backend.database import Base
from sqlalchemy import Column, Integer, String, Table, ForeignKey, Date, Enum

tag_user_table = Table('tag_user', Base.metadata,
    Column('tag_id', Integer, ForeignKey('tag.id')),
    Column('user_id', Integer, ForeignKey('user.id'))
)


class Tag(Base):
    __tablename__ = 'tag'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)


class User(Base):
    __tablename__ = 'user'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    username = Column('username', String(50), index=True)
    firstname = Column('firstname', String(50))
    lastname = Column('lastname', String(50), nullable=True)
    description = Column('description', String(800), nullable=True)
    birthdate = Column('birthday', Date)
    gender = Column("gender", Enum('female', 'male', 'undefined', name='gender_enum', create_type=False))

    tags = relationship(
        'Tag',
        secondary=tag_user_table
    )