from fastapi import APIRouter, Depends
from fastapi_users import FastAPIUsers
from fastapi_users.authentication import JWTAuthentication
from fastapi_users.db import SQLAlchemyUserDatabase

# Inicializando o backend de autenticação com JWT
SECRET = "SECRET_KEY"
auth_backends = [JWTAuthentication(secret=SECRET, lifetime_seconds=3600)]

router = APIRouter()

@router.get("/protected")
def protected_route(user=Depends(FastAPIUsers().current_user)):
    return {"message": f"Olá {user.email}, esta rota é protegida!"}
