from flask import render_template
from config.neo4j import Neo4J
from config.postgres import Postgres

from .domain_types import NGram
from .neo4j import _Neo4JHandler


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
    trigrams = ORM.get_ngrams(hashtag=hashtag, dimension=3)
    trigrams_max_index = len(bigrams) if len(bigrams) < 20 else 20
    related_tweet_count = neo4j_.exec(_Neo4JHandler.get_tweet_count_for_hashtag, hashtag=hashtag)
    related_author_count = neo4j_.exec(_Neo4JHandler.get_author_count_for_hashtag, hashtag=hashtag)
    related_hashtag_count = neo4j_.exec(_Neo4JHandler.get_hashtag_count_for_hashtag, hashtag=hashtag)
    return render_template(
        "find_similar_hashtags/detail.html",
        similar_hashtags=similar_hashtags[:max_index],
        hashtag=hashtag,
        bigrams=bigrams[:bigram_max_index],
        trigrams=trigrams[:trigrams_max_index],
        related_tweet_count=related_tweet_count,
        related_author_count=related_author_count,
        related_hashtag_count=related_hashtag_count
    )
