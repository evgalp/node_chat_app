require('dotenv').config();

const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(4000, () => {
  console.log(`Server is up on port ${process.env.PORT}`);
});

app.use(express.static('app/public'));

const io = socket(server);
