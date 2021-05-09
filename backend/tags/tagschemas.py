from typing import Optional

from pydantic.main import BaseModel


class TagBaseSchema(BaseModel):
    name: str

    class Config:
        orm_mode = True


class TagSchema(TagBaseSchema):
    id: Optional[int]