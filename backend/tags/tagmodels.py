from sqlalchemy import Column, Integer, String, Table, ForeignKey

from backend.database import Base


class Tag(Base):
    __tablename__ = 'tag'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False, index=True)
    usage = Column(Integer, nullable=True, index=True)


tag_user_table = Table('tag_user', Base.metadata,
    Column('tag_id', Integer, ForeignKey('tag.id')),
    Column('user_id', Integer, ForeignKey('user.id'))
)