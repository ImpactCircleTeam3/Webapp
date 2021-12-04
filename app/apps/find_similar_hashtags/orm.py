from typing import List
from config.postgres import Postgres

from .domain_types import NGram, Bubble


class ORM:
    db: Postgres = Postgres.get_instance().Postgres

    @classmethod
    def get_ngrams(cls, hashtag: str, dimension: int) -> List[NGram]:
        sql = f"SELECT {','.join(NGram.__annotations__.keys())} FROM ngram WHERE q=%s AND dimension=%s ORDER BY frequency DESC LIMIT 30"
        cls.db.cur.execute(sql, (hashtag, dimension, ))
        return [NGram(*row) for row in cls.db.cur.fetchall()]

    @classmethod
    def get_or_create_working_bubble(cls) -> Bubble:
        sql = f"SELECT {','.join(Bubble.__annotations__.keys())} FROM bubble WHERE NOT is_ready"
        cls.db.cur.execute(sql)
        try:
            return Bubble(*cls.db.cur.fetchone())
        except TypeError:
            bubble = None
        sql = "INSERT INTO bubble (title, is_ready, hashtags) VALUES (%s, %s, %s)"
        cls.db.cur.execute(sql, ("", False, []))
        return cls.get_or_create_working_bubble()

    @classmethod
    def update_working_bubble(cls, bubble: Bubble):
        sql = "UPDATE bubble SET hashtags=%s, title=%s, is_ready=%s WHERE id=%s"
        cls.db.cur.execute(sql, (bubble.hashtags, bubble.title, bubble.is_ready, bubble.id, ))

    @classmethod
    def get_bubble_by_id(cls, id: int) -> Bubble:
        sql = f"SELECT {','.join(Bubble.__annotations__.keys())} FROM bubble WHERE id=%s"
        cls.db.cur.execute(sql, (id, ))
        return Bubble(*cls.db.cur.fetchone())

    @classmethod
    def create_jobs_for_bubble(cls, bubble: Bubble):
        sql = "INSERT INTO job (q, type, execution_intervall) VALUES (%s, %s, %s);"
        cls.db.cur.execute(sql, (",".join(bubble.hashtags), "bubble", 15))

    @classmethod
    def get_working_bubbles(cls):
        sql = f"SELECT {','.join(Bubble.__annotations__.keys())} FROM bubble WHERE is_ready"
        cls.db.cur.execute(sql)
        return [Bubble(*entity) for entity in cls.db.cur.fetchall()]
