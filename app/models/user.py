from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  firstname = db.Column(db.String(40), nullable = False, unique = False)
  lastname = db.Column(db.String(40), nullable = False, unique = True)
  avatar = db.Column(db.Text, nullable = False, unique = False)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  posts = db.relationship('Post', backref='users', cascade='all, delete')
  comments = db.relationship('Comment', backref='users', cascade='all, delete')

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "firstname": self.firstname,
      "lastname": self.lastname,
      "avatar": self.avatar,
      "email": self.email,
      "posts": [post.to_dict() for post in self.posts],
      "comments": [comment.to_dict() for comment in self.comments]
    }
