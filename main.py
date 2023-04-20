from multiprocessing import synchronize
from typing_extensions import deprecated
from fastapi import Depends, FastAPI, Response, status, HTTPException
from random import randint
from . import models, schemas, utils
from .database import engine, SessionLocal, getDatabase
from sqlalchemy.orm import Session
from .routers import admin,center

# Table connection
models.Base.metadata.create_all(bind = engine)

# Initiate FastAPI instance
app = FastAPI()

# Router
app.include_router(admin.router)
app.include_router(center.router)

