const { db } = require('./admin.db.js');
const {
  addDoc,
  serverTimestamp  
} = require("firebase/firestore");

class AdminRepository {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.collectionRef = db.collection(collectionName);
  }


  async create(data) {
    try {
      console.log(`Creating document in ${this.collectionName}:`, data);
      
      const docRef = await addDoc(this.collectionRef, {
        ...data,
        createdAt: serverTimestamp(),  
        updatedAt: serverTimestamp()  
      });
      
      console.log(`Document created with ID: ${docRef.id}`);
      
      return {
        success: true,
        id: docRef.id,
        data: data,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error(`Error creating document in ${this.collectionName}:`, error);
      return this.errorResponse(error, 'create');
    }
  }

  errorResponse(error, operation) {
    console.error(`[AdminRepository] Error in ${operation}:`, {
      message: error.message,
      code: error.code,
      stack: error.stack
    });
    
    return {
      success: false,
      error: error.message,
      code: error.code,
      operation: operation,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = {
  AdminRepository: AdminRepository
};