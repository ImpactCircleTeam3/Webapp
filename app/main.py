from flask import Flask
from apps.find_similar_hashtags import views as similar_hashtag_views
from apps.find_similar_hashtags import api as hashtag_api
from apps.home import view as home_view
from apps.jobs import views as job_views
from apps.tweet_finder import views as tweet_finder_views


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


@app.route("/bubble-detail/<bubble>")
def bubble_detail(bubble):
    return similar_hashtag_views.get_bubble_detail(bubble)


@app.route("/jobs")
def jobs():
    return job_views.index()


@app.route('/jobs/create', methods=['POST'])
def create_jobs():
    return job_views.create()


@app.route('/jobs/delete', methods=['POST'])
def delete_jobs():
    return job_views.delete()


@app.route('/inserted-tweets')
def get_tweets_by_keywords():
    return tweet_finder_views.get_tweets_by_keywords()


@app.route('/api/get-hashtag-hashtag-relation-graph')
def get_hashtag_hashtag_relation_graph():
    return hashtag_api.get_hashtag_hashtag_relation_graph()


@app.route('/api/get-working-bubble')
def get_working_bubble():
    return hashtag_api.get_working_bubble()


@app.route('/api/update-bubble', methods=["post", "put"])
def update_bubble():
    return hashtag_api.update_working_bubble()


@app.route('/api/start-bubble', methods=["post", "put"])
def start_bubble():
    return hashtag_api.start_bubble()


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
