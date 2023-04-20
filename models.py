from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql.expression import null,text
from .database import Base

# Postgresql tables

class Admin(Base):
    __tablename__ = 'admin'

    admin_id = Column(Integer, primary_key=True,nullable=False)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    phoneNumber = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    address = Column(String, nullable=False)
    createdAt = Column(DateTime, nullable=False,server_default=(text('now()')))

class Center(Base):
    __tablename__ = 'center'

    center_id = Column(Integer, primary_key=True,nullable=False)
    username = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    phoneNumber = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    address = Column(String, nullable=False)

    createdAt = Column(DateTime, nullable=False,server_default=(text('now()')))
