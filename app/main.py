from multiprocessing import synchronize
from typing import Optional
from fastapi import Depends, FastAPI, Response, status, HTTPException
from fastapi.params import Body
from random import randint
from . import models, schemas
from .database import engine, SessionLocal, getDatabase
from sqlalchemy.orm import Session

models.Base.metadata.create_all(bind = engine)

app = FastAPI()

@app.get("/admin/all")
async def getAllAdmins(db: Session = Depends(getDatabase)):
    admins = db.query(models.Admin).all()
    return admins

@app.get('/admin/latest')
async def getLatest(db: Session = Depends(getDatabase)):
    admin = db.query(models.Admin).order_by(models.Admin.createAt.desc()).first()

    if (admin == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = "Nothing")

    return admin

@app.get('/admin/{id}')
async def getAdmin(id: int, db: Session = Depends(getDatabase)):
    admin = db.query(models.Admin).filter(models.Admin.admin_id == id).first()

    if (admin == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")

    return admin

@app.post("/createAdmin", status_code = status.HTTP_201_CREATED)
async def createAdmin(admin: schemas.AdminCreate, db: Session = Depends(getDatabase)):
    while True:
        admin.admin_id = randint(10000, 99999)

        if (db.query(models.Admin).filter(models.Admin.admin_id == admin.admin_id).first() == None):
            admin = models.Admin(**admin.dict())
            db.add(admin)
            db.commit()
            db.refresh(admin)
            return admin
        

@app.delete('/deleteAdmin/all')
async def delete(db: Session = Depends(getDatabase)):
    adminsQuery = db.query(models.Admin)

    adminsQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@app.delete('/deleteAdmin/{id}')
async def delete(id: int, db: Session = Depends(getDatabase)):
    adminQuery = db.query(models.Admin).filter(models.Admin.admin_id == id)

    if (adminQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")

    adminQuery.delete(synchronize_session = False)
    db.commit()

    return Response(status_code = status.HTTP_204_NO_CONTENT)

@app.put('/updateAdmin/{id}')
async def update(id: int, admin: schemas.AdminUpdate, db: Session = Depends(getDatabase)):
    adminQuery = db.query(models.Admin).filter(models.Admin.admin_id == id)

    if (adminQuery.first() == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND, detail = f"admin with id {id} doesn't exist")
    
    admin.admin_id = id

    adminQuery.update(admin.dict(), synchronize_session = False)
    db.commit()

    return adminQuery.first()
    

        