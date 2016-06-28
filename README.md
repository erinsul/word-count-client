Link to live app: https://erinsul.github.io/word-count-client/

Link to back-end repo: https://github.com/erinsul/word-count-api

What the app does: This app allows users to track progress on a lengthy project (or several), such as reading a novel, writing a thesis paper, writing a novel, etc. Users set
a deadline, and the app tells them how much they need to do per day to finish
on time.

My development process: I began by setting up the back end, the database tables
and controllers and models. I then was very quickly able to link the front and back
ends, and establish get/create/update/delete routes for projects. Because I was
able to get the basics working quickly, I worked to add some additional authentication
for users as well as projects. There are custom methods to check that a user entered
an email (with @ character), the password is at least 5 characters, and the deadline
entered is in the future, not the past. I also added after the fact an additional
column in the database so that users could choose if they wanted to track a project's
total pages or words, and that required some restructuring. I also moved most of
the math that I originally had the back-end doing to the front end (except calculating
the days remaining, because Ruby seemed more equipped to deal with dates than Javascript).
Because the basic functionality was completed early, I also worked hard to try to
make the styling neat and organized, also including custom styling on buttons, and
limited use of bootstrap (only for a progress bar).

Unsolved problems: No particularly pressing ones. For a more advanced version, though,
I considered adding friends for users, and comments on the projects, so that users
could post comments encouraging their friends to work harder and meet their goals.

User stories:
As a user, I want to sign up.
As a user, I want to sign in.
As a user, I want to change my password.
As a user, I want to sign out.
As a user, I want to create a new project with a deadline and select if I'm
tracking words or pages.
As a user, I want to update my progress on my project.
As a user, I want to be able to retrieve the stats for my project—word/page
count, remaining, and work-per-day to reach my deadline.
