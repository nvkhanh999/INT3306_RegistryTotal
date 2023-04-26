from passlib.context import CryptContext

# Using hashing algorithm from bcryt
pwd_context = CryptContext(schemes=["bcrypt"],deprecated="auto")

# Hash 
def hash(password : str):
    return pwd_context.hash(password)

# Verify 
def verify(password, hashed_password):
    return pwd_context.verify(password, hashed_password)