from flask import render_template
from typing import List
from dataclasses import dataclass
from neo4j.work.transaction import Transaction
from config.neo4j import Neo4J


@dataclass
class HashtagRelationCounts:
    hashtag: str
    relationship_count: int


class _Neo4JHandler:
    @classmethod
    def get_hashtags_by_count(cls, tx: Transaction, threshold: int = 0) -> List[HashtagRelationCounts]:
        query = """
            MATCH (h:Hashtag)-[:IS_IN]->(t:Tweet)
            WITH  h, count((h)-[:IS_IN]->(:Tweet)) as relationship_counts
            ORDER BY relationship_counts DESC
            WHERE relationship_counts > $threshold
            RETURN h.hashtag, relationship_counts
        """
        result = tx.run(query, threshold=threshold)
        return [
            HashtagRelationCounts(
                hashtag=row["h.hashtag"],
                relationship_count=row["relationship_counts"]
            )
            for row in result
        ]

    @classmethod
    def get_similar_hashtags(cls, tx: Transaction, hashtag: str):
        query = """
            MATCH (h:Hashtag)-[:IS_IN]->(t:Tweet)<-[:IS_IN]-(h0:Hashtag)
            WITH  h, h0, count((h)-[:IS_IN]->(:Tweet)) as match_count
            ORDER BY match_count DESC
            WHERE h0.hashtag=$hashtag
            RETURN h.hashtag, match_count
        """


def view():
    neo4j_ = Neo4J.get_instance().Neo4J
    hashtag_relation_counts = neo4j_.exec(_Neo4JHandler.get_hashtags_by_count)
    return render_template(
        "find_similar_hashtags/index.html",
        hashtag_relation_counts=hashtag_relation_counts
    )
