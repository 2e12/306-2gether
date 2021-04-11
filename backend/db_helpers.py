from pydantic.main import BaseModel
from sqlalchemy.ext.declarative import DeclarativeMeta

from backend.database import Base


def create_db_object(input_data: BaseModel, db_table: DeclarativeMeta, exclude_keys: list = None) -> Base:
    new_db_obj = db_table()
    for attr in input_data:
        key = attr[0]
        value = attr[1]
        if value and key not in exclude_keys:
            setattr(new_db_obj, key, value)
    return new_db_obj
