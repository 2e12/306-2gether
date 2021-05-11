import time

from fastapi_utils.tasks import repeat_every

from backend.database import engine, Base
from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from backend.db_helpers import get_db
from backend.suggestions.suggestionroutes import suggestion_router
from backend.tags.tagactions import count_tag_usage
from backend.tags.tagrouter import tag_router
from backend.users.exampleusers import create_example_users
from backend.users.userroutes import user_router

from starlette.applications import Starlette
from starlette.routing import Mount
from starlette.staticfiles import StaticFiles

app = FastAPI()
Base.metadata.create_all(engine)

origins = [
    "http://localhost:8100",
]

# serve static image files from images directory
app.mount("/images", StaticFiles(directory="backend/images"), name="images")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()

api_router.include_router(
    user_router,
    tags=['Auth']
)
api_router.include_router(
    suggestion_router,
    prefix="/suggestion",
    tags=['Interaction']
)
api_router.include_router(
    tag_router,
    prefix="/tags",
    tags=['Tags']
)
app.include_router(
    api_router,
    prefix="/api"
)


@app.on_event("startup")
@repeat_every(seconds=15 * 60) # all 15 min
def update_tag_usages():
    count_tag_usage(get_db())


@app.on_event("startup")
def generate_example_users():
    create_example_users(get_db())
