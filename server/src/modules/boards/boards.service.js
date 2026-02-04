// src/modules/boards/boards.service.js
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

}

const boardsService = new BoardsService();

module.exports = {
  BoardsService: BoardsService,
  boardsService: boardsService
};