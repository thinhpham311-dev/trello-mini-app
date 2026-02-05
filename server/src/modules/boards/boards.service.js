const { BoardsRepository } = require('./boards.repository.js');
const { Board } = require('./boards.model.js');

class BoardsService {
    constructor() {
        this.repository = new BoardsRepository();
    }
  
    createBoard = async function(boardData) {
      try {
          const board = Board.create(boardData);
          
          const validation = board.validate();
          if (!validation.isValid) {
              return {
                  success: false,
                  errors: validation.errors
                };
            }
            
           return await this.repository.create(board.toJSON());

        } catch (error) {
            return {
                success: false,
                error: 'Failed to create board: ' + error.message
            };
        }
    };

    /**
   * Lấy tất cả boards với các tùy chọn
   * @param {Object} options - Tùy chọn query
   * @returns {Promise<Object>} Danh sách boards
   */
async getAllBoards(options = {}) {
    try {
        const queryOptions = { ...options };

        return await this.repository.retrieveAllBoards(queryOptions);

    } catch (error) {
        return {
            success: false,
            message: 'Failed to retrieve boards',
            error: error.message
        };
    }
}
    async getBoardsById(boardId) {
        try {
            if (!boardId || typeof boardId !== 'string' || boardId.trim() === '') {
                return {
                    success: false,
                    message: 'Board ID is required',
                    code: 'INVALID_INPUT'
                };
            }
            return await this.repository.retrieveBoardsById(boardId, {
                select: ['name', 'description']
            });

        } catch (error) {
            return {
                success: false,
                message: 'Failed to retrieve boards',
                error: error.message,
                code: 'INTERNAL_ERROR'
            };
        }
    }


    async getBoardsByIds(boardIds) {
        try {
            if (!Array.isArray(boardIds) || boardIds.length === 0) {
                return {
                    success: false,
                    message: 'Board IDs array is required',
                    code: 'INVALID_INPUT'
                };
            }

            const validIds = boardIds.filter(id => 
                id && typeof id === 'string' && id.trim() !== ''
            );

            if (validIds.length === 0) {
                return {
                    success: true,
                    data: [],
                    count: 0,
                    message: 'No valid board IDs provided',
                    code: 'SUCCESS'
                };
            }

            return await this.repository.retrieveBoardsByIds(validIds,  {
                select: ['name', 'description']
            });

        } catch (error) {
            return {
                success: false,
                message: 'Failed to retrieve boards',
                error: error.message,
                code: 'INTERNAL_ERROR'
            };
        }
    }
}

const boardsService = new BoardsService();

module.exports = {
  BoardsService: BoardsService,
  boardsService: boardsService
};