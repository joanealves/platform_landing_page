from fastapi import APIRouter

router = APIRouter()

@router.get("/templates")
def get_templates():
    templates = [
        {"id": 1, "name": "Business Template", "description": "Ideal para empresas"},
        {"id": 2, "name": "Portfolio Template", "description": "Para portfólios"},
    ]
    return templates
