from typing import List
from neo4j.work.transaction import Transaction
from .domain_types import HashtagRelationCounts, SimilarHashtag


class _Neo4JHandler:
    @classmethod
    def get_hashtags_by_count(cls, tx: Transaction, threshold: int = 0) -> List[HashtagRelationCounts]:
        query = """
            MATCH (h:Hashtag)-->()
            WITH h, COUNT(h) AS r_count
            WHERE r_count > $threshold
            RETURN h.hashtag, r_count
            ORDER BY r_count DESC
        """
        result = tx.run(query, threshold=threshold)
        return [
            HashtagRelationCounts(
                hashtag=row["h.hashtag"],
                relationship_count=row["r_count"]
            )
            for row in result
        ]

    @classmethod
    def get_similar_hashtags(cls, tx: Transaction, hashtag: str) -> List[SimilarHashtag]:
        query = """
            MATCH (h:Hashtag)-->()<--(h0:Hashtag)
            WITH  h, h0, count(h) as match_count
            WHERE h0.hashtag=$hashtag
            RETURN h.hashtag, match_count
            ORDER BY match_count DESC
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

    @classmethod
    def get_relevant_hashtags(cls, tx: Transaction, hashtag: str) -> int:
        query = """
        
        """
