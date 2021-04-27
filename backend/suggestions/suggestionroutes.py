from fastapi import Depends
from fastapi_utils.cbv import cbv
from fastapi_utils.inferring_router import InferringRouter
from sqlalchemy.orm import Session

from backend.db_helpers import get_db
from backend.suggestions.suggestion import get_suggestion
from backend.users.useractions import get_user_by_id
from backend.users.usermodels import User
from backend.users.userroutes import auth
from backend.users.userschemas import UserOutputSchema

suggestion_router = InferringRouter()

@cbv(suggestion_router)
class SuggestionRoutes:
    db: Session = Depends(get_db)
    user: User = Depends(auth)

    @suggestion_router.get("/get", response_model=UserOutputSchema)
    def get_suggested_user(self):
        return get_suggestion(self.db, get_user_by_id(self.db, self.user.id))
