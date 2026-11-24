const express = require('express');
const auth = require('./routes/auth');
const files = require('./routes/files');
const tools = require('./routes/tools');
const users = require('./routes/users');

const app = express();
app.use(express.json());

app.use('/auth', auth);
app.use('/files', files);
app.use('/tools', tools);
app.use('/users', users);

app.listen(3000, () => console.log('listening on 3000'));
