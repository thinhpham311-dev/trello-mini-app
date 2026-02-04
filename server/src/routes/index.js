const express = require('express');
const BoardRouter = require('../modules/boards/boards.routes.js');
const api = express.Router();


api.use('/v1/api/boards', BoardRouter);


module.exports = {api};