import datetime
from typing import Optional, List

from pydantic.main import BaseModel


class PictureBaseSchema(BaseModel):
    id: int

    class Config:
        orm_mode = True


class PictureSchema(PictureBaseSchema):
    path: Optional[str]
