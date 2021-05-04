import datetime
from typing import Optional

from pydantic import BaseModel


class InteractionInputSchema(BaseModel):
    user: int
    target: int
    is_like: bool
    updated_on: datetime.datetime

    class Config:
        orm_mode = True


class InteractionOutputSchema(InteractionInputSchema):
    id: Optional[int]