from fastapi import Depends, Response, status, HTTPException, APIRouter
from .. import models
from ..database import getDatabase
from sqlalchemy.orm import Session
from .. import schemas,utils,oauth2

# Router
router = APIRouter(
    tags = ['Authentication']
)

# REST method
@router.post('/login')
def login(user_credentials: schemas.Login, db: Session = Depends(getDatabase)):
    user = db.query(models.Center).filter(models.Center.username == user_credentials.username).first()
    permissionCheck = True

    if (user == None):
        user = db.query(models.Admin).filter(models.Admin.username == user_credentials.username).first()
        permissionCheck = False

    if (user == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f'Wrong username or password')
    
    if (utils.verify(user_credentials.password, user.password) == False):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f'Wrong username or password')
    
    return permissionCheck