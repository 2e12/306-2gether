from typing import List

from fastapi import Depends
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from sqlalchemy.orm import Session

from backend.db_helpers import get_db
from backend.tags.tagactions import search_tags
from backend.tags.tagschemas import TagSchema
from backend.users.usermodels import User
from backend.users.userroutes import auth

tag_router = InferringRouter()


@cbv(tag_router)
class UserRoutes:
    db: Session = Depends(get_db)
    user: User = Depends(auth)

    @tag_router.get(
        "/search",
        description="Search for tags by name. Tags will be sorted by popularity and output is limited to max. 10 tags."
    )
    def search_tags(self, search_string: str) -> List[TagSchema]:
        return search_tags(self.db, search_string)
