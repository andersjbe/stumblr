# Routes

## API

- /posts Router
  - POST / - creates a new post
  ```js
  req = {
      userId: ,
      text: ,
      media_type: ,
      media_src: , // The location of the media on s3, only for photo,, video, or audio posts
  }
  ```
  - POST /reply/:id - creates a reply on the post with the given id
  ```js
    req = {
        userId: ,
        parentId: , // The id of the post the new post is replying to
        text: ,
        media_type: ,
        media_src ,
    }
  ```
  - POST /reblog/:id - creates a reblogged post from the post wiith the given id
  ```js
  req= {
      userId: ,
      originId: , //id of the orginal post that shared it
  }
  ```
  - GET /followed/:id - Retrieves all posts from users that the given user follows, sorted to show the most recent
- /users Router
  - POST / - creates a new user
    - Uses bcrypt to encrypt the user's password
  ```js
  req = {
  	username: '',
  	password: '',
  };
  ```
  - POST /follow - adds a follow between two users to the database
  ```js
  req = {
      followerId: ,
      followedId: ,
  }
  ```

## Front End

- /
  - Users who are not logged in will arrive here first
  - Splash page with random picture
  - Links to login or sign up
  - if implemented, search will be available here
- /signup
  - Sign up form for new users
  - Form will post to /users on the server
  - On success, the new user will be directed to their dashboard, and a JWT token will be stored in localStorage
- /login
  - Logi in form for existing user
  - Form will post to /login on the server
  - Upon successful login, a JWT token will be placed on local storage
- /dashboard
  - Logged in users will come here first
  - Will render recent posts from followed users
  - Users will make posts fromhere using an interface at the top of the page
    - New post form will pop up as a modal

