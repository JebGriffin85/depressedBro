from app.models import db, Post


def seed_posts():

    post1 = Post(title='No more beer',
                 body='we ran out of beer at at the last party and have no more money',
                 userId=1)

    db.session.add(post1)

    db.session.commit()

    post2 = Post(title='we failed all our classes',
                 body='i failed out again and my dad is gonna kill me, what should i do?',
                 userId=2)

    db.session.add(post2)

    db.session.commit()

    post3 = Post(title='No more hazing',
                 body='they said no more hazing but that is all we know, what should we do',
                 userId=2)

    db.session.add(post3)

    db.session.commit()

    post4 = Post(title='i have no idea',
                 body='i just dont know anymore bruh',
                 userId=1)

    db.session.add(post4)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
