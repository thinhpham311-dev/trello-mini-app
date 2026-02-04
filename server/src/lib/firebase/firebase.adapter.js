// src/lib/firebase/firebase.adapter.js
import { db } from './firebase.db.js';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  writeBatch
} from "firebase/firestore";

export class FirebaseRepository {
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.collectionRef = collection(db, collectionName);
  }

  // ============ CRUD OPERATIONS ============

  async create(data) {
    try {
      const docRef = await addDoc(this.collectionRef, {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return this.successResponse(docRef.id, data);
    } catch (error) {
      return this.errorResponse(error, 'create');
    }
  }

  async createWithId(id, data) {
    try {
      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      return this.successResponse(id, data);
    } catch (error) {
      return this.errorResponse(error, 'createWithId');
    }
  }

  async getById(id) {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return this.successResponse(
          docSnap.id, 
          docSnap.data()
        );
      }
      return this.notFoundResponse(id);
    } catch (error) {
      return this.errorResponse(error, 'getById');
    }
  }

  async getAll() {
    try {
      const querySnapshot = await getDocs(this.collectionRef);
      const data = [];
      
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return this.successResponse(null, data);
    } catch (error) {
      return this.errorResponse(error, 'getAll');
    }
  }

  async update(id, data) {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date().toISOString()
      });
      return this.successResponse(id, data);
    } catch (error) {
      return this.errorResponse(error, 'update');
    }
  }

  async delete(id) {
    try {
      await deleteDoc(doc(db, this.collectionName, id));
      return this.successResponse(id);
    } catch (error) {
      return this.errorResponse(error, 'delete');
    }
  }

  // ============ QUERY METHODS ============

  async findOne(filters = []) {
    try {
      let q = this.collectionRef;
      
      filters.forEach(filter => {
        q = query(q, where(filter.field, filter.operator, filter.value));
      });
      
      q = query(q, limit(1));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return this.successResponse(doc.id, doc.data());
      }
      
      return this.notFoundResponse();
    } catch (error) {
      return this.errorResponse(error, 'findOne');
    }
  }

  async findMany(filters = [], options = {}) {
    try {
      let q = this.collectionRef;
      
      // Apply filters
      filters.forEach(filter => {
        q = query(q, where(filter.field, filter.operator, filter.value));
      });
      
      // Apply sorting
      if (options.orderBy) {
        const direction = options.orderDirection || 'asc';
        q = query(q, orderBy(options.orderBy, direction));
      }
      
      // Apply limit
      if (options.limit) {
        q = query(q, limit(options.limit));
      }
      
      const querySnapshot = await getDocs(q);
      const data = [];
      
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      return this.successResponse(null, data);
    } catch (error) {
      return this.errorResponse(error, 'findMany');
    }
  }

  // ============ BATCH OPERATIONS ============

  async batchCreate(items) {
    try {
      const batch = writeBatch(db);
      const results = [];
      
      items.forEach(item => {
        const docRef = doc(collection(db, this.collectionName));
        batch.set(docRef, {
          ...item,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        results.push({ id: docRef.id, ...item });
      });
      
      await batch.commit();
      return this.successResponse(null, results);
    } catch (error) {
      return this.errorResponse(error, 'batchCreate');
    }
  }

  async batchUpdate(updates) {
    try {
      const batch = writeBatch(db);
      
      updates.forEach(({ id, data }) => {
        const docRef = doc(db, this.collectionName, id);
        batch.update(docRef, {
          ...data,
          updatedAt: new Date().toISOString()
        });
      });
      
      await batch.commit();
      return this.successResponse();
    } catch (error) {
      return this.errorResponse(error, 'batchUpdate');
    }
  }

  async batchDelete(ids) {
    try {
      const batch = writeBatch(db);
      
      ids.forEach(id => {
        const docRef = doc(db, this.collectionName, id);
        batch.delete(docRef);
      });
      
      await batch.commit();
      return this.successResponse();
    } catch (error) {
      return this.errorResponse(error, 'batchDelete');
    }
  }

 

  // ============ RESPONSE HELPERS ============

  successResponse(id = null, data = null) {
    return {
      success: true,
      id,
      data,
      timestamp: new Date().toISOString()
    };
  }

  errorResponse(error, operation) {
    console.error(`[FirebaseRepository] Error in ${operation}:`, error);
    return {
      success: false,
      error: error.message,
      code: error.code,
      operation,
      timestamp: new Date().toISOString()
    };
  }

  notFoundResponse(id = null) {
    return {
      success: false,
      error: 'Document not found',
      id,
      timestamp: new Date().toISOString()
    };
  }
}