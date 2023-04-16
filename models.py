from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql.expression import null,text
from .database import Base

class Admin(Base):
    __tablename__ = 'admin'

    admin_id = Column(Integer, primary_key=True,nullable=False)
    username = Column(String, nullable=False)
    password = Column(String, nullable=False)
    phoneNumber = Column(String, nullable=False)
    email = Column(String, nullable=False)
    address = Column(String, nullable=False)
    createdAt = Column(DateTime, nullable=False,server_default=(text('now()')))

