import datetime
from typing import Optional, List

from pydantic.main import BaseModel


class PictureSchema(BaseModel):
    id: int
    path: Optional[str]

    class Config:
        orm_mode = True

