const express = require("express");
require('dotenv').config();
const path = require("path");
const cors = require("cors");
const {api} = require('./routes/index.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/', api);




module.exports = app;
