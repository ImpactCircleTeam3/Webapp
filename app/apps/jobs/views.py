from flask import render_template, request, redirect
from dataclasses import dataclass
from typing import List
from config.postgres import Postgres


@dataclass
class Job:
    q: str
    execution_intervall: int
    type: str = "hashtag"


class ORM:
    db: Postgres = Postgres.get_instance().Postgres

    @classmethod
    def get_jobs(cls) -> List[Job]:
        sql = f"SELECT {','.join(Job.__annotations__.keys())} FROM job"
        cls.db.cur.execute(sql, )
        jobs = [Job(*job) for job in cls.db.cur.fetchall()]
        return jobs

    @classmethod
    def insert_job(cls, job: Job):
        fields = ','.join(Job.__annotations__.keys())
        placeholder = ','.join(['%s' for _ in Job.__annotations__.keys()])
        sql = f"INSERT INTO job ({fields}) VALUES ({placeholder})"
        cls.db.cur.execute(sql, list(job.__dict__.values()))

    @classmethod
    def delete_job(cls, hashtag: str):
        sql = "DELETE FROM job WHERE q=%s"
        cls.db.cur.execute(sql, (hashtag, ))

    @classmethod
    def get_neo4j_job_cache(cls):
        sql = "SELECT value FROM postgres_to_neo_cache WHERE key=%s"

        sql_hashtag_count = "SELECT MAX(id) FROM hashtag"
        cls.db.cur.execute(sql_hashtag_count)
        hashtag_count = cls.db.cur.fetchone()[0]
        cls.db.cur.execute(sql, ("last_taken_hashtag_id",))
        cached_hashtag = cls.db.cur.fetchone()[0]

        sql_user_count = "SELECT MAX(id) FROM twitter_user"
        cls.db.cur.execute(sql_user_count)
        user_count = cls.db.cur.fetchone()[0]
        cls.db.cur.execute(sql, ("last_taken_twitter_user_id",))
        cached_user = cls.db.cur.fetchone()[0]

        sql_tweet_count = "SELECT MAX(id) FROM tweet"
        cls.db.cur.execute(sql_tweet_count)
        tweet_count = cls.db.cur.fetchone()[0]
        cls.db.cur.execute(sql, ("last_taken_id",))
        cached_tweet = cls.db.cur.fetchone()[0]

        return {
            "twitter_user": {"neo4j": cached_user, "pg": user_count},
            "hashtag": {"neo4j": cached_hashtag, "pg": hashtag_count},
            "tweet": {"neo4j": cached_tweet, "pg": tweet_count},
        }


def index():
    jobs = ORM.get_jobs()
    neo4j_stats = ORM.get_neo4j_job_cache()
    return render_template("jobs/index.html", jobs=jobs, neo4j_stats=neo4j_stats)


def create():
    try:
        if request.form["q"] == "":
            raise Exception("q can not be empty")
        q = request.form["q"].replace("#", "").replace(" ", "").lower()
        ORM.insert_job(Job(q=q, execution_intervall=30))
    except Exception as e:
        pass
    return redirect("/jobs")


def delete():
    try:
        if request.form["q"] == "":
            raise Exception("q can not be empty")
        ORM.delete_job(hashtag=request.form["q"])
    except Exception as e:
        pass
    return redirect("/jobs")

