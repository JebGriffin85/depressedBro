from .db import db
from .user import User
from datetime import datetime


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    updatedAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    userId = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete='CASCADE'), nullable=False)
    postId = db.Column(db.Integer, db.ForeignKey(
        "posts.id", ondelete='CASCADE'), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "createdAt": self.createdAt,
            "updatedAt": self.updatedAt,
            "userId": self.userId,
            "postId": self.postId,
            "firstname": User.query.get(self.userId).firstname,
            "lastname": User.query.get(self.userId).lastname,
            "avatar": User.query.get(self.userId).avatar
        }
