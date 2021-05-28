from sqlalchemy.orm import relationship
from sqlalchemy.ext.hybrid import hybrid_property
from backend.users.usermodels import User

from backend.database import Base
from sqlalchemy import Column, Integer, String, ForeignKey


class Picture(Base):
    __tablename__ = "picture"

    id = Column(Integer, primary_key=True, index=True)
    path = Column(String, nullable=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'))

    # foreignKeys relationships
    user = relationship(User, foreign_keys=[user_id])

    @hybrid_property
    def url(self) -> str:
        return "/images/{}{}".format(self.id, ".jpg")

