from passlib.context import CryptContext

# Using hashing algorithm from bcryt
pwd_context = CryptContext(schemes=["bcrypt"],deprecated="auto")

# Hash function
def hash(password : str):
    return pwd_context.hash(password)
