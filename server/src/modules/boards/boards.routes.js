const express = require('express');
const router = express.Router();

 const {createBoard,getAllBoards } = require('./boards.controller.js');

 router.get('/', getAllBoards);
router.post('/', createBoard);


module.exports = router;