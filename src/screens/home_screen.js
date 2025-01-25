const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
  // Implement home screen logic here
  res.json({ message: 'Welcome to the Home Screen' });
});

module.exports = router;

