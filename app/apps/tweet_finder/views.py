from flask import render_template, request
from elasticsearch import Elasticsearch
from config import Settings


es = Elasticsearch([Settings.get_es_uri()])


class Tweet:
    def __init__(
        self,
        id: int,
        status_id: int,
        url: str,
        text: str,
        favorite_count: int,
        retweet_count: int,
        author: str,
        *args, **kwargs
    ):
        self.id = id
        self.status_id = status_id
        self.url = url
        self.text = text
        self.favorite_count = favorite_count
        self.retweet_count = retweet_count
        self.author = author


def get_tweets_by_keywords():
    q = request.args.getlist("q")
    query = {
        "match": {
            "text": {
                "query": " ".join(q),
                "operator": "and"
            }
        }
    }
    res = es.search(index="pg-tweet", query=query, size=1000)
    tweets = []
    if len(res["hits"]['hits']) > 0:
        tweets = [Tweet(**e["_source"]) for e in res["hits"]['hits'] if e["_source"]["language_code"] == "en"]

    processed_texts = []
    cleaned_tweets = []
    for tweet in tweets:
        if tweet.text not in processed_texts:
            processed_texts.append(tweet.text)
            cleaned_tweets.append(tweet)

    return render_template(
        "tweet_finder/index.html",
        tweets=cleaned_tweets
    )
