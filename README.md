# A Day in the Life

Link to server repository https://github.com/danieldenton/day-in-life-server

# What is it?

Do you ever miss the early days of social media? When each application focused more on user needs and less on pumping out a fancy new feature to keep up with their competition? A Day in the Life is a website that aims to make casual photo sharing more engaging again. This app shows you a feed of different users, with a slideshow of their posts, rather than an endless scroll of advertisements and sponsored posts designed to maximize your screen past what you originally intended. This is based off the idea of engaging with the profile of specific users, to get a more in depth view of what is going on in a day in the life of the individual person. Once clicking on their profile, you will be given a list of all the photo's they've shared. All of these images will be clickable, allowing you to view the picture and share your thoughts!

# API Choice

The API we chose to use is Cloudinary. We will be using this API to allow users to upload photos to their feed.

# Restful Routing Chart

| **CRUD** | **URL**                | **DESCRIPTION**                         |
| -------- | ---------------------- | --------------------------------------- |
| POST     | /api-v1/users/register |                                         |
| POST     | /api-v1/users/login    |                                         |
| GET      | /api-v1/users/:id      | user profile age                        |
| GET      | /api-v1/users          | public feed of user slideshows          |
| POST     | /api-v1/pictures       | picture post form                       |
| GET      | /api-v1/pictures/:id   | individual picture w comments & subdocs |
| PUT      | /api-v1/pictures/:id   | individual w comments & subdocs edits   |
| DELETE   | /api-v1/pictures/:id   | delete individula picture post          |
| POST     | /api-v1/comments       | add comments to an individual post      |
| PUT      | /api-v1/comments/:id   | edit comments                           |
| DELETE   | /api-v1/comments/:id   | delete comments                         |

# Wireframes

<details>
<summary>Click to show</summary>

- About us page
  ![About us page](./assets/AboutUs.png)
- Sign up page
  ![Sign up page](./assets/SignUp.png)
- Login page
  ![Sign in page](./assets/Login.png)
- Public landing page
  ![Public landing page](./assets/PublicLanding.png)
- Public feed page
  ![Public feed page](./assets/PublicFeed.png)
- Profile page
  ![Profile page](./assets/Profile.png)
- Details page
![Details page](./assets/Details.png)
</details>

# ERD

![ERD](./assets/ERD.png)

# User Stories

- As a user without an account, I would like to register with my name, email, and password.
- As a user without an account, I would like to see a page that explains what a day in the life is, and how it would be useful.
- As a user who finished registration, I would like to be able to sign into my created account.
- As a user who is signed in, I would like to be able to sign out of my account.
- As a user I want to post photos to my profile, so I can see and share them later.
- As a user I would like to edit any post I have already made.
- As a user I would like to delete any post I have already made.
- As a user I want to be the only one who can edit or delete my post.
- As a user I want to click on others profiles, so I can see the posts they've made.
- As a user I want to click on an individual picture of another user to see more information.
- As a user I would like to comment on a individual picture to share my thoughts.
- As a user I would like to be able to delete a comment I wrote.
- As a user I would like to be able to edit a comment I wrote.

# MVP goals

- Sign up and sign in functionality.
- User authentication with encrpyted passwords.
- CRUD functionality for a users post
- CRUD for comments on posts.
- User autherization for comment update and delete.
- User autherization for post update and delete.
- Layout for signed in user home page showing all users with a slideshow of their pictures.
- Layout for unregistered user home page showing the concept of the app, and how it would be useful.

# Stretch Goals

- Add private profiles
- Add private photos
- Have the layout of the signed in user resemble a polaroid.
- Change password
