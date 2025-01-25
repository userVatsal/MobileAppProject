const express = require('express');
const router = express.Router();

router.get('/detail', (req, res) => {
  // Implement detail screen logic here
  res.json({ message: 'Detail Screen', item: { id: 1, name: 'Sample Item' } });
});

module.exports = router;

