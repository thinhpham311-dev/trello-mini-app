const express = require("express");
require('dotenv').config();
const path = require("path");
const cors = require("cors");
const { db } = require('./config/firebase');

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get('/test-db', async (req, res) => {
  await db.collection('users').add({
    name: 'Thinh',
    createdAt: new Date(),
  });

  res.send('Firebase connected ✅');
});

app.use("/", indexRouter);

module.exports = app;
