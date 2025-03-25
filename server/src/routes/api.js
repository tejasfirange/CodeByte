const express = require('express');
const router = express.Router();

// Example route
router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Example protected route
router.get('/protected', (req, res) => {
  // TODO: Add authentication middleware
  res.json({ message: 'This is a protected route' });
});

module.exports = router; 