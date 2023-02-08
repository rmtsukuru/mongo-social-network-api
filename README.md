## MongoDB User Data Management Server ##

See [REQUIREMENTS.md](/REQUIREMENTS.md) for more information.

**How to run**:

(Requires MongoDB server to be installed and running; if not already installed, see [here](https://www.mongodb.com/docs/manual/installation/) for details).

1. Run `npm i`
2. Run `npm run seed`
2. Run `npm start`
3. Navigate to `localhost:3001/api/users` in your browser to see a list of users

**Currently working API routes**:

`/api/users`:
- GET     (fetch all users)
- POST    (create a user)

`/api/users/:id`
- GET     (fetch a user by ID)
- PUT     (update a user by ID)
- DELETE  (delete a user by ID)

**Routes remaining to be implemented**:

`/api/users/:id/friends/:friendId`
- POST    (add a friend to user's friend list)
- DELETE  (delete a friend from user's friend list)

`/api/thoughts`
- GET     (fetch all thoughts)
- POST    (create a thought, including to attached user)

`/api/thoughts/:id`
- GET     (fetch a thought by ID)
- PUT     (update a thought by ID)
- DELETE  (delete a thought by ID)

`/api/thoughts/:id/reactions`
- POST    (add a reaction to a thought)
- DELETE  (delete a reaction from a thought by its reactionId*)
    reactionId is stored in request body

See [notes.txt](/notes.txt) for more details.