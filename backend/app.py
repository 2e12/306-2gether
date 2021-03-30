from backend.database import engine, Base
from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

from backend.users.routes import user_router

app = FastAPI()
Base.metadata.create_all(engine)

origins = [
    "http://localhost:8100",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()

api_router.include_router(user_router)

app.include_router(
    api_router,
    prefix="/api"
)
