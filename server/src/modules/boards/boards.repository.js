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

}

module.exports = {
  BoardsRepository: BoardsRepository
};