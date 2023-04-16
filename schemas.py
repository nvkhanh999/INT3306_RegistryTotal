from pydantic import BaseModel
from typing import Optional

class Admin(BaseModel):
    admin_id: Optional[int]
    username: str
    password: str
    phoneNumber: str
    email: str
    address: str
    


