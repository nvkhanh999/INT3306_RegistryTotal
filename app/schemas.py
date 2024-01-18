from pydantic import BaseModel

class AdminBase(BaseModel):
    username: str
    password: str
    phoneNumber: str
    email: str
    address: str

class AdminCreate(BaseModel):
    admin_id: Optional[int]

class AdminUpdate(BaseModel):
    pass

