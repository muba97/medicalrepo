require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: '*' }));
// just usin cors() should work but not sure why its not working rn
app.use(express.json({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => res.send('API Running'));


const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Your server is running on port ${port}`);
});

module.exports = app;