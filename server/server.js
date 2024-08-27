const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 5431;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const router = require('./router/router')

app.use('/users', router);
