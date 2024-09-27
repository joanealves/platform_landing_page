# backend/routes/templates.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class Template(BaseModel):
    id: int
    name: str
    components: list

# Simulação de banco de dados com templates prontos
templates_db = [
    {
        "id": 1,
        "name": "Business Template",
        "components": [
            {"id": "1", "content": "Botão", "settings": {"text": "Entre em contato", "color": "blue"}},
            {"id": "2", "content": "Texto", "settings": {"text": "Bem-vindo ao nosso site!"}},
            {"id": "3", "content": "Imagem", "settings": {"src": "https://via.placeholder.com/300"}},
        ]
    }
]

@router.get("/templates")
def get_templates():
    if not templates_db:
        raise HTTPException(status_code=404, detail="Nenhum template encontrado")
    return templates_db

@router.post("/save")
def save_template(template: Template):
    templates_db.append(template.dict())
    return {"message": "Template salvo com sucesso!"}
