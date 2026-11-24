const express = require('express');
const _ = require('lodash');
const mysql = require('mysql');

const router = express.Router();
const db = mysql.createConnection({ host: 'localhost', user: 'app', database: 'shop' });

router.get('/:id', (req, res) => {
  db.query("SELECT * FROM users WHERE id = '" + req.params.id + "'", (error, rows) => {
    const user = rows[0];
    res.json({ name: _.get(user, 'name'), city: _.get(user, 'address.city') });
  });
});

module.exports = router;
