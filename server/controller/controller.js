const db = require('../config/firebaseConfig');
const helperFunction = require('../helpers/helper')

async function addUser(req, res) {
    const name = req.body.name || null;
    const email = req.body.email || null;
    const age = req.body.age || 0;
    const weight = req.body.weight || 0;
    const height = req.body.height || 0;
    const healthGoals = req.body.healthGoals || null;
    const createdAt = req.body.createdAt || new Date().toUTCString();

    if (!name) {
        return res.json({ code: 0, message: "Name is required" });
    }
    if (!email) {
        return res.json({ code: 0, message: "Email is required" });
    }
    if (!helperFunction.isValidNumber(age) || !Number.isInteger(age) || age <= 0) {
        return res.json({ code: 0, message: "Age must be a positive integer" });
    }
    if (!helperFunction.isValidNumber(age) || !Number.isInteger(age) || age <= 0) {
        return res.json({ code: 0, message: "Age must be a positive integer" });
    }
    if (!helperFunction.isValidNumber(weight) || weight <= 0) {
        return res.json({ code: 0, message: "Weight must be a positive number" });
    }
    if (!helperFunction.isValidNumber(height) || height <= 0) {
        return res.json({ code: 0, message: "Height must be a positive number" });
    }

    try {
        const userRef = db.collection('users').doc(); // Automatically generates a unique ID
        await userRef.set({
            name: name,
            email: email,
            age: age,
            weight: weight,
            height: height,
            healthGoals: healthGoals,
            createdAt: createdAt
        });
        return res.json({ code: 1, message: "User added successfully with ID " + userRef.id, date: {id: userRef.id} });
    } catch (error) {
        return res.json({ code: 0, message: "Error adding user", error: error.message });
    }
}


async function getAllUsers(req, res) {
    try {
        const usersRef = db.collection('users');
        const usersList = await usersRef.get();

        if (usersList.empty) {
            return res.json({ code: 0, message: "No users found" });
        }

        const users = [];
        usersList.forEach(doc => {
            users.push({ id: doc.id, ...doc.data() });
        });

        return res.json({ code: 1, data: users });
    } catch (error) {
        return res.json({ code: 0, message: "Error retrieving users", error: error.message });
    }
}


async function getUserById(req, res) {
    const userId = req.params.id || null;

    if (!userId)
        return res.json({code: -1, message: "User ID is required"});


    try {
        const userRef = db.collection('users').doc(userId);
        const doc = await userRef.get();

        if (!doc.exists) {
            return res.json({ code: 0, message: "User not found" });
        }

        return res.json({ code: 1, data: { id: doc.id, ...doc.data() } });
    } catch (error) {
        return res.json({ code: 0, message: "Error retrieving user", error: error.message });
    }
}


async function updateUserById(req, res) {
    const userId = req.params.id || null;

    if (!userId)
        return res.json({ code: -1, message: "User ID is required" });
    
    const { name, email, age, weight, height, healthGoals } = req.body;

    // Validate input (similar to what you did earlier)
    if (!name || !email) {
        return res.json({ code: 0, message: "Name and email are required" });
    }
    if (!helperFunction.isValidNumber(age) || !Number.isInteger(age) || age <= 0) {
        return res.json({ code: 0, message: "Age must be a positive integer" });
    }
    if (!helperFunction.isValidNumber(weight) || weight <= 0) {
        return res.json({ code: 0, message: "Weight must be a positive number" });
    }
    if (!helperFunction.isValidNumber(height) || height <= 0) {
        return res.json({ code: 0, message: "Height must be a positive number" });
    }

    try {
        const userRef = db.collection('users').doc(userId);
        const doc = await userRef.get();

        if (!doc.exists) {
            return res.json({ code: 0, message: "User not found" });
        }

        await userRef.update({
            name: name,
            email: email,
            age: age,
            weight: weight,
            height: height,
            healthGoals: healthGoals
        });

        return res.json({ code: 1, message: "User updated successfully" });
    } catch (error) {
        return res.json({ code: 0, message: "Error updating user", error: error.message });
    }
}


async function deleteUserById(req, res) {
    const userId = req.params.id;

    if (!userId)
        return res.json({code: -1, message: "User ID is required"});

    try {
        const userRef = db.collection('users').doc(userId);
        const doc = await userRef.get();

        if (!doc.exists) {
            return res.json({ code: 0, message: "User not found" });
        }

        await userRef.delete();
        return res.json({ code: 1, message: "User deleted successfully" });
    } catch (error) {
        return res.json({ code: 0, message: "Error deleting user", error: error.message });
    }
}




module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}