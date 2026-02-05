const express = require('express');
const router = express.Router();

const {createBoard,getAllBoards, getBoardsById, getBoardsByIds, updateBoard, deleteBoard } = require('./boards.controller.js');

router.get('/', getAllBoards);
router.post('/', createBoard);
router.put('/:id', updateBoard);
router.delete('/:id', deleteBoard);
router.get('/:id', getBoardsById);
router.patch('/', getBoardsByIds);

module.exports = router;