from app.models import db, Comment


def seed_comments():
    comment1 = Comment(body='ask your dad for money dude',
                        userId=2, postId=1)
    
    db.session.add(comment1)

    db.session.commit()

    comment2 = Comment(body='try and study with beer man',
                       userId=1, postId=2)

    db.session.add(comment2)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
