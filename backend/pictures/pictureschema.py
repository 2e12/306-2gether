from typing import Optional

from pydantic.main import BaseModel


class PictureBaseSchema(BaseModel):
    path: Optional[str]

    class Config:
        orm_mode = True


class PictureSchema(BaseModel):
    id: int


