from fastapi import FastAPI
from .routes import templates
app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Bem-vindo à Plataforma de Landing Pages!"}

app.include_router(templates.router, prefix="/api")