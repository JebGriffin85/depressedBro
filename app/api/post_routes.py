from flask import Blueprint, redirect, request
from app.models import Post, User, db, Comment
from flask_login import login_required, current_user
from app.forms import PostForm

post_routes = Blueprint('posts', __name__)


@post_routes.route('')
def get_posts():
    res = Post.query.all()
    return {'posts': [post.to_dict() for post in res]}


@post_routes.route('', methods=['POST'])
# @login_required
def create_post():
    user_id = current_user.get_id()
    form = PostForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_post = Post(title=form.data['title'],
                        body=form.data['body'], userId=user_id)
        db.session.add(new_post)
        db.session.commit()
        return {new_post.to_dict()['id']: new_post.to_dict()}
    return {'error': 'could not post'}
