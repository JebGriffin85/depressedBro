
from flask_wtf import FlaskForm
from wtforms import StringField


class CommentForm(FlaskForm):
    body = StringField('body')
