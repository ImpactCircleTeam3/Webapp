from flask import Flask
from apps.find_similar_hashtags import views
from apps.home import view as home_view

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
    return views.get_hashtag_relation_counts()


@app.route("/hashtag-finder/<hashtag>")
def similar_hashtags(hashtag):
    return views.get_similar_hashtags(hashtag)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
