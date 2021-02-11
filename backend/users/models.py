from sqlalchemy.orm import relationship

from backend.database import Base
from sqlalchemy import Column, Integer, String


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    username = Column(String, unique=True)
