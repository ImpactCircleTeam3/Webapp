from typing import Optional, Callable
from neo4j import GraphDatabase
from . import Settings


class Neo4J:
    Neo4J: Optional["Neo4J"] = None

    @classmethod
    def get_instance(cls) -> "Neo4J":
        if not cls.Neo4J:
            cls.Neo4J = cls()
        return cls.Neo4J

    def __init__(self):
        self._connect()

    def _connect(self):
        neo4j_kwargs = Settings.get_neo4j_kwargs()
        self.driver = GraphDatabase.driver(
            neo4j_kwargs["uri"],
            auth=(neo4j_kwargs["user"], neo4j_kwargs["password"])
        )

    def exec(self, executor: Callable, **kwargs):
        with self.driver.session() as session:
            result = session.write_transaction(executor, **kwargs)
        return result
