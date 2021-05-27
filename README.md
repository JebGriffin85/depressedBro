
# Depressed Bro!
This application is an entertaining help site for college students who need a place to discuss hardships and give each other advice to their specific problems.

To view the live project click <a href="https://depressed-bro.herokuapp.com/">here</a>

Technologies used: React, Redux, Flask, SQLAlchemy, SocketIO, CSS


The main features of this app are:
- Creating posts - any logged in user can create a post
- Edit/Delete posts - any logged in user edit or delete a post they own
- Comments - any logged in user can create a comment
- Edit/Delete comments - any logged in user can edit or delete a comment they own
- Search - users may search for posts by title
- Live Chat - users may use live chat feature to talk to anyone else on the app

### Home Page
When a user first lands on our app this is the first page they will see.
Here they can either login or signup to gain access to the sites features, or browse and view posts.

<img src="https://i.ibb.co/rwGLjPk/Screen-Shot-2021-05-27-at-11-02-19-AM.png"  />

### Single Post Page
Clicking on a post will bring a user to a specific post page.  
If they are logged in they can comment on the post.
If they own the post they have the option to delete or edit the post.

<img src="https://i.ibb.co/QFXCYdf/Screen-Shot-2021-05-27-at-11-04-56-AM.png" />

### Profile Page
A logged in user can view their profile page, which displays links to all the posts they own.
They can also view stats of how many post they've made and how many comments they have.

<img src="https://i.ibb.co/D1772Dy/Screen-Shot-2021-05-27-at-11-07-08-AM.png" />

### Search Feature
Any user can search posts by title.  It brings them to a new page that displays
all matching posts.  If no post are found it will display 'No posts were found' text.

<img src="https://i.ibb.co/3hycYzQ/Screen-Shot-2021-05-27-at-11-12-44-AM.png" />

### Live Chat
Logged in and logged out users may both use live chat.  If the user is not logged in,
they will be given a default name.  The chat does not persists through page refreshes.

<img src="https://i.ibb.co/RHQsWyR/Screen-Shot-2021-05-27-at-11-09-33-AM.png" />
