const express = require('express');
const axios = require('axios');
const { exec } = require('child_process');

const router = express.Router();

router.get('/ping', (req, res) => {
  exec(`ping -c 1 ${req.query.host}`, (error, stdout) => {
    res.send(stdout);
  });
});

router.get('/preview', async (req, res) => {
  const response = await axios.get(req.query.url);
  res.json({ preview: response.data });
});

router.post('/calc', (req, res) => {
  const result = eval('(' + req.body.expression + ')');
  res.json({ result });
});

module.exports = router;
