# from werkzeug.security import generate_password_hash
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(firstname='Chad', lastname='Thad',
                avatar='https://i.ibb.co/CwM7pX5/Screen-Shot-2021-05-04-at-2-42-36-PM.png', 
                email='demo@aa.io', password='password')

    db.session.add(demo)

    db.session.commit()

    demo2 = User(firstname='Kyle', lastname='Johnson',
                 avatar='https://i.ibb.co/V2WNZj2/Screen-Shot-2021-05-04-at-2-42-43-PM.png',
                 email='demo2@aa.io', password='password')

    db.session.add(demo2)

    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
