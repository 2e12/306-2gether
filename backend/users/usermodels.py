from sqlalchemy.orm import relationship

from backend.database import Base
from sqlalchemy import Column, Integer, String, ForeignKey, Date, Enum

from backend.tags.tagmodels import tag_user_table


class Contact(Base):
    __tablename__ = 'contact'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(20), index=True)
    value = Column(String(90))
    user_id = Column(Integer, ForeignKey('user.id'))


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

    contact_options = relationship("Contact")


    tags = relationship(
        'Tag',
        secondary=tag_user_table
    )
    pictures = relationship('Picture')
