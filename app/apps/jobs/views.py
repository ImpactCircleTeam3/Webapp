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


def index():
    jobs = ORM.get_jobs()
    return render_template("jobs/index.html", jobs=jobs)


def create():
    try:
        if request.form["q"] == "":
            raise Exception("q can not be empty")
        q = request.form["q"].replace("#", "").replace(" ", "").lower()
        ORM.insert_job(Job(q=q, execution_intervall=360))
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

