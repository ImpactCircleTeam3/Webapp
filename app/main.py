from flask import Flask
from apps.find_similar_hashtags import views as similar_hashtag_views
from apps.home import view as home_view
from apps.jobs import views as job_views


app = Flask(
    __name__,
    static_folder='static/',
    template_folder='templates/'
)


@app.route("/")
def home():
    return home_view()


@app.route("/hashtag-finder")
def hashtag_finder():
    return similar_hashtag_views.get_hashtag_relation_counts()


@app.route("/hashtag-finder/<hashtag>")
def similar_hashtags(hashtag):
    return similar_hashtag_views.get_similar_hashtags(hashtag)


@app.route("/jobs")
def jobs():
    return job_views.index()


@app.route('/jobs/create', methods=['POST'])
def create_jobs():
    return job_views.create()


@app.route('/jobs/delete', methods=['POST'])
def delete_jobs():
    return job_views.delete()


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
