from sqlalchemy import Column, Integer, ForeignKey, Boolean, DateTime, func

from backend.database import Base


class Interaction(Base):
    __tablename__ = 'Interaction'

    id = Column(Integer, primary_key=True, index=True)
    user = Column('user_id', Integer, ForeignKey('user.id'), index=True)
    target = Column('target_user_id', Integer, ForeignKey('user.id'), index=True)
    is_like = Column('is_like', Boolean, default=True, index=True)
    updated_on = Column(DateTime(), onupdate=func.now())
