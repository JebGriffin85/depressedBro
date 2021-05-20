from flask import Blueprint, redirect, request
from app.models import Post, User, db, Comment
from flask_login import login_required, current_user
from app.forms import PostForm, CommentForm

post_routes = Blueprint('posts', __name__)


@post_routes.route('')
def get_posts():
    res = Post.query.order_by(Post.createdAt.desc()).limit(24).all()
    return {'posts': [post.to_dict() for post in res]}


@post_routes.route('', methods=['POST'])
@login_required
def create_post():
    user_id = current_user.get_id()
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_post = Post(title=form.data['title'],
                        body=form.data['body'], userId=user_id)
        db.session.add(new_post)
        db.session.commit()
        return {new_post.to_dict()['id']: new_post.to_dict()}
    return {'error': 'could not post'}


@post_routes.route('<int:id>')
def get_post(id):
    single_post = Post.query.get(id)
    return single_post.to_dict()


@post_routes.route('/<int:postId>/comments', methods=['POST'])
@login_required
def post_comment(postId):
    user_id = current_user.get_id()
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(body=form.data['body'],
                              userId=user_id, postId=postId)
        db.session.add(new_comment)
        db.session.commit()
        return {new_comment.to_dict()['id']: new_comment.to_dict()}
    return {'error': 'could not post'}


@post_routes.route('/<int:postId>/comments/<int:commentId>', methods=['DELETE'])
@login_required
def comment_delete(postId, commentId):
    old_comment = Comment.query.get(commentId)
    user_id = int(current_user.get_id())
    comment_user = Comment.query.get(commentId).userId

    if user_id == comment_user:
        db.session.delete(old_comment)
        db.session.commit()
        return {'message': 'success'}
    return {'error': 'could not delete'}


@post_routes.route("/comments/<int:commentId>", methods=['PUT'])
@login_required
def edit_comment(commentId):
    current_comment = Comment.query.get(int(commentId))
    user_id = current_user.get_id()
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        current_comment.body = form.data['body']
        db.session.add(current_comment)
        db.session.commit()
        return current_comment.to_dict()
    return {'error': 'could not post'}


@post_routes.route('<int:id>', methods=['PUT'])
@login_required
def edit_post(id):
    current_post = Post.query.get(int(id))
    user_id = current_user.get_id()
    form = PostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        current_post.title = form.data['title']
        current_post.body = form.data['body']
        db.session.add(current_post)
        db.session.commit()
        return {'message': 'success'}
    return {'error': 'could not edit'}


@post_routes.route('/user/<int:userId>')
@login_required
def user_posts(userId):
    user_id = userId
    posts = Post.query.filter(Post.userId == user_id)
    return {'posts': [post.to_dict() for post in posts]}


@post_routes.route('/<int:postId>', methods=['DELETE'])
@login_required
def post_delete(postId):
    user_id = int(current_user.get_id())
    post_user = Post.query.get(postId).userId
    if user_id == post_user:
        post = Post.query.get(postId)
        db.session.delete(post)
        db.session.commit()
        return {'message': 'success'}
    return {'error': 'could not delete'}
