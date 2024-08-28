# Basic CRUD operations using Firestore database and Node.js

### Description
This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using the Firestore database with a Node.js backend. It allows users to perform various operations such as adding a user, retrieving a list of users, updating user information, and deleting a user profile. The project also includes a simple frontend interface built with HTML, CSS, and JavaScript to interact with the backend API.<br>


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
> [!IMPORTANT]
> Create a **server/config/config.json** file with your Firebase project credentials. <br>
> #### Steps to get credential from your firebase account
> 1. Create a firebase account
> 2. Go to console and create a project
> 3. Click on project > Project Overvew > Project Settings<br>
> <img src="https://github.com/Harsha0431/MY-BLOBS/blob/main/Firestore%20CRUD%20Nodejs/asserts/my-project.png" width="500" /><br>
> 4. Click on ***Service accounts***<br>
> <img src="https://github.com/Harsha0431/MY-BLOBS/blob/main/Firestore%20CRUD%20Nodejs/asserts/project-overview-service-accounts.png" height="200" /><br>
> 5. Clikc on ***Generate new private key*** to download config.json file<br>
> <img src="https://github.com/Harsha0431/MY-BLOBS/blob/main/Firestore%20CRUD%20Nodejs/asserts/generate-config-file.png" width="500" /><br>


4. Run the application (Server)
> ***node server.js*** or ***nodemon server.js***
5. Access the frontend
> Open ***index.html*** in your browser to use the frontend interface.


### API Endpoints
**GET** ***`/users`***: Retrieve all users.<br>
**GET** ***`/users/:id`***: Retrieve a user by their ID.<br>
**POST** ***`/users`***: Add a new user.<br>
**PUT** ***`/users/:id`***: Update a user by their ID.<br>
**DELETE** ***`/users/:id`***: Delete a user by their ID.<br>
