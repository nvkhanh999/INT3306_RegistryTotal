from fastapi import Depends, Response, status, HTTPException, APIRouter
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from .. import models
from ..database import getDatabase
from sqlalchemy.orm import Session
from .. import utils, oauth2, schemas

# Router
router = APIRouter(
    tags = ['Authentication']
)

# REST method
@router.post('/login',response_model=schemas.Token)
def login(userCredentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(getDatabase)):
    user = db.query(models.Center).filter(models.Center.username == userCredentials.username).first()
    permissionCheck = True

    if (user == None):
        user = db.query(models.Admin).filter(models.Admin.username == userCredentials.username).first()
        permissionCheck = False

    if (user == None):
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = f'Wrong username or password')

    if (utils.verify(userCredentials.password, user.password) == False):
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN, detail = f'Wrong username or password')
    
    if (permissionCheck):
        return {"access_token": oauth2.createAccessToken({'user_id': user.center_id}), "token_type": "bearer"}
    
    return {"access_token": oauth2.createAccessToken({'user_id': user.admin_id}), "token_type": "bearer"}