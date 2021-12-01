import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    @staticmethod
    def get_neo4j_kwargs() -> dict:
        return {
            "user": os.getenv("NEO4J_USER"),
            "password": os.getenv("NEO4J_PASSWORD"),
            "uri": os.getenv("NEO4J_URI")
        }

    @staticmethod
    def get_db_kwargs() -> dict:
        return {
            "user": os.getenv("DB_USER"),
            "password": os.getenv("DB_PASSWORD"),
            "host": os.getenv("DB_HOST"),
            "port": int(os.getenv("DB_PORT")),
            "database": os.getenv("DB_NAME")
        }
