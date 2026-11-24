const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Mounted at /files in src/index.js. Public route, no login required.
router.get('/download/:name', (req, res) => {
  const filePath = path.join(__dirname, '..', '..', 'uploads', req.params.name);
  res.json({ content: fs.readFileSync(filePath, 'utf8') });
});

module.exports = router;
