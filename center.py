from fastapi import Depends, Response, status, HTTPException, APIRouter
from random import randint
from ..database import getDatabase
from sqlalchemy.orm import Session
from .. import schemas,oauth2,utils,models

# Router
router = APIRouter (
    prefix="/center",
    tags=["center"]
)

# REST methods

@router.get('/all', response_model = list[schemas.CenterResponse])
async def get(db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    centers = db.query(models.Center).all()
    return centers

@router.get('/latest', response_model = schemas.CenterResponse)
async def get(db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    center = db.query(models.Center).order_by(models.Center.createAt.desc()).first()

    if (center == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Nothing")

    return center

@router.get('/{id}', response_model = schemas.CenterResponse)
async def get(id: int, db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    center = db.query(models.Center).filter(models.Center.center_id == id).first()

    if (center == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"center with id {id} doesn't exist")

    return center

@router.post("/create", status_code = status.HTTP_201_CREATED, response_model = schemas.CenterResponse)
async def create(center: schemas.CenterCreate, db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    center.password = utils.hash(center.password)
    while True:
        center.center_id = randint(10000, 99999)

        if (db.query(models.Center).filter(models.Center.center_id == center.center_id).first() == None):
            center = models.Center(**center.dict())
            db.add(center)
            db.commit()
            db.refresh(center)
            return center
        
@router.delete('/delete/all')
async def delete(db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    centersQuery = db.query(models.Center)

    centersQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@router.delete('/delete/{id}')
async def delete(id: int, db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    centerQuery = db.query(models.Center).filter(models.Center.center_id == id)

    if (centerQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"center with id {id} doesn't exist")

    centerQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@router.put('/update/{id}', response_model = schemas.CenterResponse)
async def update(id: int, center: schemas.CenterUpdate, db: Session = Depends(getDatabase), userId : int = Depends(oauth2.getCurrentUser)):
    centerQuery = db.query(models.Center).filter(models.Center.center_id == id)

    if (centerQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"center with id {id} doesn't exist")
    center.password = utils.hash(center.password)
    centerQuery.update(center.dict(), synchronize_session = False)
    db.commit()

    return centerQuery.first()