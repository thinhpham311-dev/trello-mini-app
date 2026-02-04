const { AdminRepository } = require('../../lib/firebase/admin.adapter.js');
const { Board } = require('./boards.model.js');

class BoardsRepository extends AdminRepository {
  constructor() {
    super('boards');
  }

  async create(boardData) {
    try {
      
      const board = new Board(boardData);
      const validation = board.validate();
      
      if (!validation.isValid) {
        return {
          success: false,
          errors: validation.errors,
          message: 'Board validation failed'
        };
      }
      
      const docRef = this.collectionRef.doc();
      const docData = {
        ...board.toJSON(),
        id: docRef.id
      };
      
      await docRef.set(docData);
      
      return {
        success: true,
        id: docRef.id,
        data: docData,
      };
      
    } catch (error) {
      return this.errorResponse(error, 'create');
    }
  }

  /**
   * Retrieve all boards with pagination and search
   * @param {Object} options - Query options
   * @param {string} options.search - Text search in name and description
   * @returns {Promise<Object>} Query result with data and pagination info
   */
  async retrieveAllBoards(options = {}) {
    try {
      const {
        search = '',
      } = options;

      let query = this.collectionRef;

      let snapshot;

      snapshot = await query.get();
      
      const boards = [];

      snapshot.forEach(doc => {
        const data = doc.data();
        boards.push(data);
      });

      let filteredBoards = boards;
      if (search.trim()) {
        const searchTerm = search.toLowerCase().trim();
        filteredBoards = boards.filter(board => {
          return (
            (board.name && board.name.toLowerCase().includes(searchTerm)) ||
            (board.description && board.description.toLowerCase().includes(searchTerm))
          );
        });
      }

      return {
        success: true,
        data: filteredBoards,
      };

    } catch (error) {
      return this.errorResponse(error, 'retrieveAllBoards');
    }
  }
}

module.exports = {
  BoardsRepository: BoardsRepository
};