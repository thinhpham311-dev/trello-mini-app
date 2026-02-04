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

module.exports = {
  createBoard: createBoard,
};