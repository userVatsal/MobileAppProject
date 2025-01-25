const express = require('express');
const router = express.Router();

// Sample in-memory storage for users
let users = [];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Find the user
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful', user });
});

module.exports = router;
