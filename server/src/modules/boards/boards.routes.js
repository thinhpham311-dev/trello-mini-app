const express = require('express');
const router = express.Router();

 const {createBoard} = require('./boards.controller.js');

router.post('/', createBoard);

module.exports = router;