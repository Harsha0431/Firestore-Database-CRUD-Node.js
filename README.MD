# Basic CRUD operations using Firestore database and Node.js

### Description
This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using the Firestore database with a Node.js backend. It allows users to perform various operations such as adding a user, retrieving a list of users, updating user information, and deleting a user profile. The project also includes a simple frontend interface built with HTML, CSS, and JavaScript to interact with the backend API.

### Tools and Technologies Used
1. **Node.js:** A JavaScript runtime built on Chrome's V8 engine, used for building the backend API.
2. **Firestore (Firebase):** A NoSQL cloud database used to store and retrieve user data.
3. **Express.js:** A minimal and flexible Node.js web application framework used for routing and handling HTTP requests.
4. **HTML/CSS/JavaScript:** The frontend technologies used to create a simple user interface for interacting with the API.
5. **Postman (Optional):** A tool for testing API endpoints during development.

### Setup and Installation
1. Clone the repository
> git clone https://github.com/Harsha0431/Firestore-Database-CRUD-Node.js.git <br>
> cd Firestore-Database-CRUD-Node
2. Install dependencies
> ***pnpm install*** or ***npm install***
3. Configure Firebase
> Create a **server/config/config.json** file with your Firebase project credentials.
4. Run the application (Server)
> ***node server.js*** or ***nodemon server.js***
5. Access the frontend
> Open ***index.html*** in your browser to use the frontend interface.


### API Endpoints
**GET** ***`/users`***: Retrieve all users.
**GET** ***`/users/:id`***: Retrieve a user by their ID.
**POST** ***`/users`***: Add a new user.
**PUT** ***`/users/:id`***: Update a user by their ID.
**DELETE** ***`/users/:id`***: Delete a user by their ID.
