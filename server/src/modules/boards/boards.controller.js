const { boardsService } = require('./boards.service.js');
const { successResponse, errorResponse } = require('../../utils/response.js');

const createBoard = async function(req, res) {
  try {
    const {name, description = ""} = req.body;
    
    if (!name || typeof name !== 'string' || !name.trim()) {
      return errorResponse(res, 400, 'Board name is required');
    }
    
    const result = await boardsService.createBoard(
      {
        name: name.trim(),
        description: description.trim(),
      },
    );
    
    if (!result.success) {
      if (result.errors && result.errors.length > 0) {
        return errorResponse(res, 400, result.errors.join(', '));
      }
      return errorResponse(res, 400, result.error || 'Failed to create board');
    }
    
    return successResponse(res, 201, {
      id: result.id,
      name: name,
      description: description,
    });
    
  } catch (error) {
    return errorResponse(res, 500, 'Internal server error');
  }
};

const getAllBoards = async(req, res) =>{
    try {
      const options = {
        search: req.query.search,
      };

      const userId = req.user?.id;
      const result = await boardsService.getAllBoards(options, userId);

      res.status(result.success ? 200 : 400).json(result);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
}

module.exports = {
  createBoard: createBoard,
  getAllBoards: getAllBoards,
};