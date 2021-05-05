from .db import db
from .user import User
from datetime import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    userId = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'), nullable=False)
    comments = db.relationship(
        "Comment", backref="posts", cascade="all, delete", passive_deletes=True)

    def to_dict(self):
          return {
              "id": self.id,
              "title": self.title,
              "body": self.body,
              "userId": self.userId,
              "firstname": User.query.get(self.userId).firstname,
              "lastname": User.query.get(self.userId).lastname,
              "avatar": User.query.get(self.userId).avatar,
              "createdAt": self.createdAt,
              "updatedAt": self.updatedAt,
              "comments": [comment.to_dict() for comment in self.comments]
          }