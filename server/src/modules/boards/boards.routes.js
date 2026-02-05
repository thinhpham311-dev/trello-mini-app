const express = require('express');
const router = express.Router();

const {createBoard,getAllBoards, getBoardsById, getBoardsByIds, updateBoard } = require('./boards.controller.js');

router.get('/', getAllBoards);
router.post('/', createBoard);
router.put('/:id', updateBoard)
router.get('/:id', getBoardsById);
router.patch('/', getBoardsByIds);

module.exports = router;