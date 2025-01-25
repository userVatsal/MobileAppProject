const express = require('express');
const router = express.Router();

// Sample in-memory storage for users
let users = [];

router.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check if the user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  // Create a new user
  const newUser = { username, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'Signup successful', user: newUser });
});

module.exports = router;
