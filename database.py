from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Database connection URL 
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123456789@localhost/INT3306_RegistryTotal"

# Database connection 
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Boilerplate
SessionLocal = sessionmaker(autocommit=False, autoflush=False,bind=engine)

# Boilerplate
Base = declarative_base()

# Dependency
def getDatabase():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()