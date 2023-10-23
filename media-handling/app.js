// app.js
require('dotenv').config();
const express = require('express');
const app = express();

app.use('/images', express.static('public/images'));
app.use('/files', express.static('public/files'));

const mediaRouter = require('./routes/media.routes');
app.use('/api/v1', mediaRouter);

const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log('listening on port', PORT));