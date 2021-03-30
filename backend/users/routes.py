from fastapi_utils.inferring_router import InferringRouter

from backend.users.auth import fastapi_users, jwt_authentication

user_router = InferringRouter()
auth_router = InferringRouter()

auth_router.include_router(
    fastapi_users.get_register_router(),
    tags=["auth"],
)

auth_router.include_router(
    fastapi_users.get_auth_router(jwt_authentication),
    tags=["auth"],
)

user_router.include_router(
    fastapi_users.get_users_router(),
    prefix="/users",
    tags=["users"],
)