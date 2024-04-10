// controllers/userController.js

const User = require('../models/user');


// Create a new user
async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Get all users
async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Get a single user
async function getUser(req, res) {
    const name = req.params.name; // Assuming the name is provided in the request parameters
    try {
        const user = await User.findOne({ Name: name.toLowerCase() });
        if (user === null) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ message: err.message }); // Send error response
    }
}

// Update a user
async function updateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

// Delete a user
async function deleteUser(req, res) {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
