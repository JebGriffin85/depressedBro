from flask_wtf import FlaskForm
from wtforms import StringField


class PostForm(FlaskForm):
    title = StringField('title')
    body = StringField('body')
