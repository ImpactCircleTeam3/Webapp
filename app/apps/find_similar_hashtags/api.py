from flask import jsonify, request
from .orm import ORM
from .domain_types import Bubble



def get_hashtag_hashtag_relation_graph():
    return jsonify({
        "data": {}
    })


def get_working_bubble():
    bubble = ORM.get_or_create_working_bubble()
    return jsonify(bubble.__dict__)


def update_working_bubble():
    bubble = ORM.get_bubble_by_id(request.form['id'])
    bubble.hashtags.append(request.form['newHashtag'])
    ORM.update_working_bubble(bubble=bubble)
    return jsonify(bubble.__dict__)


def start_bubble():
    bubble = ORM.get_bubble_by_id(request.form['id'])
    bubble.is_ready = True
    ORM.update_working_bubble(bubble=bubble)
    ORM.create_jobs_for_bubble(bubble=bubble)
    bubble = ORM.get_or_create_working_bubble()
    return jsonify(bubble.__dict__)
