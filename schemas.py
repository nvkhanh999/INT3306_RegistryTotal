from typing import Optional
from pydantic import BaseModel, EmailStr
from datetime import datetime

# Request/Response model for Admin,Center 

class AdminBase(BaseModel):
    username: str
    email: EmailStr
    phoneNumber: str
    address: str

class AdminUpdate(AdminBase):
    password: str
    
class AdminCreate(AdminBase):
    admin_id: Optional[int]
    password: str

class AdminResponse(AdminBase):
    createAt: datetime
    
    class Config:
        orm_mode = True

class Login(BaseModel):
    username: str
    password: str

class CenterBase(BaseModel):
    username: str
    email: EmailStr
    phoneNumber: str
    admin_id: int
    address: str

class CenterUpdate(CenterBase):
    password: str
    
class CenterCreate(CenterBase):
    password: str
    center_id: Optional[int]

class CenterResponse(CenterBase):
    createdAt: datetime
    
    class Config:
        orm_mode = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    id: Optional[str] = None

