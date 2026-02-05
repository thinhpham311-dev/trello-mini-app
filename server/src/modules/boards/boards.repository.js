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

  async update(boardId, boardData) {
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
      
      const docRef = this.collectionRef.doc(boardId);
      
      await docRef.update(board.toJSON());
      
      return {
        success: true,
        id: boardId,
        data: board.toJSON(),
      };
      
    } catch (error) {
      return this.errorResponse(error, 'update');
    }
  }

  async delete(boardId) {
    try{
      const docRef = this.collectionRef.doc(boardId);
      await docRef.delete();
      
      return {
        success: true,
        id: boardId,
      };
    }catch(error){
      return this.errorResponse(error, 'delete');
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

  /**
   * get board following to ID - optimized version
   * @param {string} boardId - Board ID
   * @param {Object} options - Query options
   * @param {Array} options.select - Select to specific fields 
   * @returns {Promise<Object>} Query result with data
   */
  async retrieveBoardsById(boardId, options = {}) {
    try {
      if (!boardId || typeof boardId !== 'string' || boardId.trim() === '') {
        return {
          success: false,
          message: 'Valid board ID is required',
          code: 'INVALID_ID'
        };
      }

      const docRef = this.collectionRef.doc(boardId);
      const doc = await docRef.get();

      if (!doc.exists) {
        return {
          success: false,
          message: 'Board not found',
          code: 'NOT_FOUND'
        };
      }

      let boardData = doc.data();

      if (options.select && Array.isArray(options.select)) {
        boardData = this.selectFields(boardData, options.select, {
          includeDefaultFields: ['id'], 
          includeMissing: false 
        });
      }

      return {
        success: true,
        data: boardData,
        cached: false,
        code: 'SUCCESS'
      };

    } catch (error) {
      return this.errorResponse(error, 'retrieveBoardsById');
    }
  }

   /**
   * get boards following to IDs list
   * @param {Array<string>} boardIds - Array board IDs
   * @param {Object} options - Query options
   * @returns {Promise<Object>} Query result with data
   */
  async retrieveBoardsByIds(boardIds, options = {}) {
    try {
      if (!Array.isArray(boardIds) || boardIds.length === 0) {
        return {
          success: false,
          message: 'Board IDs array is required and must not be empty',
          code: 'INVALID_INPUT'
        };
      }

      const invalidIds = boardIds.filter(id => 
        !id || typeof id !== 'string' || id.trim() === ''
      );
      
      if (invalidIds.length > 0) {
        return {
          success: false,
          message: 'Invalid board IDs found',
          invalidIds: invalidIds,
          code: 'INVALID_IDS'
        };
      }

      const MAX_BATCH_SIZE = 30; 
      if (boardIds.length > MAX_BATCH_SIZE) {
        return {
          success: false,
          message: `Maximum ${MAX_BATCH_SIZE} boards can be retrieved at once`,
          code: 'MAX_LIMIT_EXCEEDED'
        };
      }

      const uniqueIds = [...new Set(boardIds)];
      
      const docPromises = uniqueIds.map(id => 
        this.collectionRef.doc(id).get()
      );

      const docSnapshots = await Promise.all(docPromises);

      const boards = [];
      
      docSnapshots.forEach((docSnapshot) => {
        
        if (docSnapshot.exists) {
          let boardData = docSnapshot.data();
          
          if (options.select && Array.isArray(options.select)) {
            boardData = this.selectFields(boardData, options.select, {
              includeDefaultFields: ['id'], 
              includeMissing: false 
            });
          }
          
          boards.push(boardData);
        } 
      });

      return {
        success: true,
        data: boards,
        count: boards.length,
      };
    } catch (error) {
      return this.errorResponse(error, 'retrieveBoardsById');
    }
  }
}

module.exports = {
  BoardsRepository: BoardsRepository
};