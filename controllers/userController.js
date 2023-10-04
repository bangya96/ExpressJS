const User = require('../models').User; // Import the User model

async function viewCreate(req, res) {
    res.render('user/create');
}

// Create a new user
async function createUser(req, res) {
    try {
        const { username, email, password } = req.body;

        const newUser = await User.create({
            username,
            email,
            password,
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
}

// Fetch all users
async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
}

module.exports = {
    viewCreate,
    createUser,
    getAllUsers,
};
