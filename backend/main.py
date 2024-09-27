from fastapi import FastAPI
from .routes import templates, auth  # Importe a rota de autenticação

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à Plataforma de Landing Pages!"}

# Incluindo as rotas de templates e autenticação
app.include_router(templates.router, prefix="/api")
app.include_router(auth.router, prefix="/auth")
