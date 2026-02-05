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

const updateBoard = async function(req, res) {
    try{

        const {id} =  req.params;
        const {name, description} = req.body;
        
        if(!id || typeof id !== 'string' || id.trim() === ''){
            return errorResponse(res, 400, 'Board ID is required');
        }
        
        const boardData = {};
        if(name && typeof name === 'string'){
            boardData.name = name.trim();
        }
        if(description && typeof description === 'string'){
            boardData.description = description.trim();
        }
        
        const result = await boardsService.updateBoard(id.trim(), boardData);
        
        if(!result.success){
            if(result.errors && result.errors.length > 0){
                return errorResponse(res, 400, result.errors.join(', '));
            }
            return errorResponse(res, 400, result.error || 'Failed to update board');
        }
        
        return successResponse(res, 200, {
            id: id,
            ...boardData
        });
    } catch(error){
        return errorResponse(res, 500, 'Internal server error');
    }
}

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


const getBoardsById = async function(req, res) {
    try {
        const {id} = req.params;
        if (!id || typeof id !== 'string' || id.trim() === '') {
            return errorResponse(res, 400, 'Board ID is required');
        }
        
        const result = await boardsService.getBoardsById(id.trim());
        
        if (!result.success) {
            return errorResponse(res, 404, result.message || 'Board not found');
        }
        
        return successResponse(res, 200, result.data);
        
    } catch (error) {
        return errorResponse(res, 500, 'Internal server error');
    }
}

const getBoardsByIds = async function(req, res) {
    try {
        const { boardIds } = req.body;
        if (!Array.isArray(boardIds) || boardIds.length === 0) {
            return errorResponse(res, 400, 'Board IDs array is required');
        }
        
        const result = await boardsService.getBoardsByIds(boardIds);
        
        if (!result.success) {
            return errorResponse(res, 400, result.message || 'Failed to retrieve boards');
        }
        
        return successResponse(res, 200, result.data);
        
    } catch (error) {
        return errorResponse(res, 500, 'Internal server error');
    }
}

module.exports = {
  createBoard: createBoard,
  updateBoard: updateBoard,
  getAllBoards: getAllBoards,
  getBoardsById: getBoardsById,
  getBoardsByIds: getBoardsByIds
};