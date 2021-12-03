from flask import render_template
from typing import List
from dataclasses import dataclass
from neo4j.work.transaction import Transaction
from config.neo4j import Neo4J
from config.postgres import Postgres


@dataclass
class HashtagRelationCounts:
    hashtag: str
    relationship_count: int


@dataclass
class SimilarHashtag:
    source: str
    hashtag: str
    score: int


@dataclass
class NGram:
    dimension: int
    sequence: List[str]
    frequency: int
    q: str
    type: str


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
    def get_similar_hashtags(cls, tx: Transaction, hashtag: str) -> List[SimilarHashtag]:
        query = """
            MATCH (h:Hashtag)-[:IS_IN]->(t:Tweet)<-[:IS_IN]-(h0:Hashtag)
            WITH  h, h0, count((h)-[:IS_IN]->(:Tweet)) as match_count
            ORDER BY match_count DESC
            WHERE h0.hashtag=$hashtag
            RETURN h.hashtag, match_count
        """
        result = tx.run(query, hashtag=hashtag)
        return [
            SimilarHashtag(
                source=hashtag,
                hashtag=row["h.hashtag"],
                score=row["match_count"]
            )
            for row in result
        ]

    @classmethod
    def get_tweet_count_for_hashtag(cls, tx: Transaction, hashtag: str) -> int:
        query = """
            MATCH (h:Hashtag)-[:IS_IN]->(t:Tweet)
            WHERE h.hashtag=$hashtag
            RETURN COUNT(DISTINCT t) as tweet_count
        """
        result = list(tx.run(query, hashtag=hashtag))
        if len(result) == 0:
            return 0

        try:
            return list(result)[0]['tweet_count']
        except KeyError:
            return 0

    @classmethod
    def get_author_count_for_hashtag(cls, tx: Transaction, hashtag: str) -> int:
        query = """
            MATCH (h:Hashtag)-[:IS_IN]->(t:Tweet)-[:IS_WRITTEN_BY]->(a:User)
            WHERE h.hashtag=$hashtag
            RETURN COUNT(DISTINCT a) as user_count
        """
        result = list(tx.run(query, hashtag=hashtag))
        if len(result) == 0:
            return 0

        try:
            return list(result)[0]['user_count']
        except KeyError:
            return 0

    @classmethod
    def get_hashtag_count_for_hashtag(cls, tx: Transaction, hashtag: str) -> int:
        query = """
            MATCH (h0:Hashtag)-[:IS_IN]->(t:Tweet)<-[:IS_IN]-(h:Hashtag)
            WHERE h0.hashtag=$hashtag
            RETURN COUNT(DISTINCT h) as hashtag_count
        """
        result = list(tx.run(query, hashtag=hashtag))
        if len(result) == 0:
            return 0

        try:
            return list(result)[0]['hashtag_count']
        except KeyError:
            return 0


class ORM:
    db: Postgres = Postgres.get_instance().Postgres

    @classmethod
    def get_ngrams(cls, hashtag: str, dimension: int):
        sql = f"SELECT {','.join(NGram.__annotations__.keys())} FROM ngram WHERE q=%s AND dimension=%s ORDER BY frequency DESC"
        cls.db.cur.execute(sql, (hashtag, dimension, ))
        return [NGram(*row) for row in cls.db.cur.fetchall()]


def get_hashtag_relation_counts():
    neo4j_ = Neo4J.get_instance().Neo4J
    hashtag_relation_counts = neo4j_.exec(_Neo4JHandler.get_hashtags_by_count)
    max_index = len(hashtag_relation_counts) if len(hashtag_relation_counts) < 20 else 20
    return render_template(
        "find_similar_hashtags/index.html",
        hashtag_relation_counts=hashtag_relation_counts[:max_index]
    )


def get_similar_hashtags(hashtag: str):
    neo4j_ = Neo4J.get_instance().Neo4J
    similar_hashtags = neo4j_.exec(_Neo4JHandler.get_similar_hashtags, hashtag=hashtag)
    max_index = len(similar_hashtags) if len(similar_hashtags) < 10 else 10
    bigrams = ORM.get_ngrams(hashtag=hashtag, dimension=2)
    bigram_max_index = len(bigrams) if len(bigrams) < 20 else 20
    related_tweet_count = neo4j_.exec(_Neo4JHandler.get_tweet_count_for_hashtag, hashtag=hashtag)
    related_author_count = neo4j_.exec(_Neo4JHandler.get_author_count_for_hashtag, hashtag=hashtag)
    related_hashtag_count = neo4j_.exec(_Neo4JHandler.get_hashtag_count_for_hashtag, hashtag=hashtag)
    return render_template(
        "find_similar_hashtags/detail.html",
        similar_hashtags=similar_hashtags[:max_index],
        hashtag=hashtag,
        bigrams=bigrams[:bigram_max_index],
        related_tweet_count=related_tweet_count,
        related_author_count=related_author_count,
        related_hashtag_count=related_hashtag_count
    )
