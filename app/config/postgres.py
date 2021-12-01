import psycopg2
from typing import Optional
from . import Settings


class Postgres:
    Postgres: Optional["Postgres"] = None

    @classmethod
    def get_instance(cls) -> "Postgres":
        if not cls.Postgres:
            cls.Postgres = cls()
        return cls.Postgres

    def __init__(self):
        self._connect()

    def _connect(self):
        self.conn = psycopg2.connect(**Settings.get_db_kwargs())
        self.cur = self.conn.cursor()
        self.conn.autocommit = True
