from fastapi import Depends, Response, status, HTTPException, APIRouter
from random import randint
from .. import models
from ..database import getDatabase
from sqlalchemy.orm import Session
from .. import schemas
from .. import utils

# Router
router = APIRouter(
    prefix= "/admin",
    tags=["admin"]
)

# REST methods

@router.get('/all',response_model = list[schemas.AdminResponse])
async def getAllAdmins(db: Session = Depends(getDatabase)):
    admins = db.query(models.Admin).all()
    return admins

@router.get('/latest',response_model=schemas.AdminResponse)
async def getLatest(db: Session = Depends(getDatabase)):
    admin = db.query(models.Admin).order_by(models.Admin.createdAt.desc()).first()

    if (admin == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "No admin found")

    return admin

@router.get('/{id}',response_model=schemas.AdminResponse)
async def getAdmin(id: int, db: Session = Depends(getDatabase)):
    admin = db.query(models.Admin).filter(models.Admin.admin_id == id).first()

    if (admin == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")

    return admin

@router.post("/create", status_code = status.HTTP_201_CREATED, response_model = schemas.AdminResponse)
async def createAdmin(admin: schemas.AdminCreate, db: Session = Depends(getDatabase)):
    admin.password = utils.hash(admin.password)
    while True:
        admin.admin_id = randint(10000, 99999)

        if (db.query(models.Admin).filter(models.Admin.admin_id == admin.admin_id).first() == None):
            admin = models.Admin(**admin.dict())
            db.add(admin)
            db.commit()
            db.refresh(admin)
            return admin
        

@router.delete('/delete/all')
async def delete(db: Session = Depends(getDatabase)):
    adminsQuery = db.query(models.Admin)

    adminsQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@router.delete('/delete/{id}')
async def delete(id: int, db: Session = Depends(getDatabase)):
    adminQuery = db.query(models.Admin).filter(models.Admin.admin_id == id)

    if (adminQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")

    adminQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@router.put('/update/{id}',response_model=schemas.AdminResponse)
async def update(id: int, admin: schemas.AdminUpdate, db: Session = Depends(getDatabase)):
    adminQuery = db.query(models.Admin).filter(models.Admin.admin_id == id)

    if (adminQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")
    admin.password = utils.hash(admin.password)
    adminQuery.update(admin.dict(), synchronize_session = False)
    db.commit()

    return adminQuery.first()
    