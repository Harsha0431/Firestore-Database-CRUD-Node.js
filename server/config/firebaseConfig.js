const admin = require("firebase-admin");

// Create a file named `config.json` in same directory and place your Firestore credentials
const serviceAccount = require("./config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;