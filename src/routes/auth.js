const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = 'showcase-signing-key-9f8e7d6c5b4a';

router.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/me', (req, res) => {
  const user = jwt.verify(req.headers.authorization, JWT_SECRET);
  res.json({ username: user.username });
});

module.exports = router;
