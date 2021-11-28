from flask import Flask
from apps.find_similar_hashtags import view as find_similar_hashtags_view

app = Flask(
    __name__,
    static_folder='static/',
    template_folder='templates/'
)


@app.route("/hashtag-finder")
def hashtag_finder():
    return find_similar_hashtags_view()


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
