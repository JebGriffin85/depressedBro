from flask import Blueprint, redirect, request
from app.models import Post, User, db, Comment
from flask_login import login_required, current_user

search_routes = Blueprint('search', __name__)


@search_routes.route('/<string:query>')
def search_get(query):
    search_res = Post.query.filter(
        Post.title.ilike(f'%{query}%')).all()
    return {'posts': [post.to_dict() for post in search_res]}
