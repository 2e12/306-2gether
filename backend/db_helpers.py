from pydantic.main import BaseModel
from sqlalchemy.ext.declarative import DeclarativeMeta

from backend.database import Base, SessionLocal


def get_db():
    db = SessionLocal()
    return db


def create_db_object(input_data: BaseModel, db_table: DeclarativeMeta, exclude_keys: list = None) -> Base:
    new_db_obj = db_table()
    return apply_values_to_object(input_data, new_db_obj, exclude_keys)


def apply_values_to_object(input_data: BaseModel, db_object: Base, exclude_keys: list = None) -> Base:
    for attr in input_data:
        key = attr[0]
        value = attr[1]
        if value and key not in exclude_keys:
            setattr(db_object, key, value)
    return db_object
