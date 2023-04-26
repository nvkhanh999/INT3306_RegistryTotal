from multiprocessing import synchronize
from typing_extensions import deprecated
from fastapi import Depends, FastAPI, Response, status, HTTPException
from random import randint
from . import models, schemas, utils
from .database import engine, SessionLocal, getDatabase
from sqlalchemy.orm import Session
from .routers import admin,center
from .config import settings
from fastapi.middleware.cors import CORSMiddleware
# Table connection
models.Base.metadata.create_all(bind = engine)

# Initiate FastAPI instance
app = FastAPI()

origins = [
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Router
app.include_router(admin.router)
app.include_router(center.router)

