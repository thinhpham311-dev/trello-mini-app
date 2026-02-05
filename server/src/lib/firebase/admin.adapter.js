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

 /**
 * Selects only the specified fields from an object
 * @param {Object} data - The source object
 * @param {Array<string>} fields - Array of field names to select
 * @param {Object} options - Optional configuration
 * @returns {Object} A new object containing only the selected fields
 */
  selectFields(data, fields, options = {}) {
    try {
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return options.returnEmptyObject ? {} : data;
      }

      if (!Array.isArray(fields) || fields.length === 0) {
        return options.returnEmptyObject ? {} : data;
      }

      const hasNestedFields = fields.some(field => field.includes('.'));
      
      if (hasNestedFields) {
        return this.selectNestedFields(data, fields, options);
      }

      const selected = {};
      const defaultFields = options.includeDefaultFields || [];
      const allFields = [...new Set([...fields, ...defaultFields])];
      
      allFields.forEach(field => {
        if (this.hasProperty(data, field)) {
          selected[field] = this.getPropertyValue(data, field);
        } else if (options.includeMissing !== false) {
          selected[field] = null;
        }
      });

      return selected;

    } catch (error) {
      return options.returnEmptyObject ? {} : data;
    }
  }

  /**
   * Excludes the specified fields from an object
   * @param {Object} data - The source object
   * @param {Array<string>} fields - Array of field names to exclude
   * @param {Object} options - Optional configuration
   * @returns {Object} A new object excluding the specified fields
   */
  unselectFields(data, fields, options = {}) {
    try {
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return data;
      }

      if (!Array.isArray(fields) || fields.length === 0) {
        return data;
      }

      const hasNestedFields = fields.some(field => field.includes('.'));
      
      if (hasNestedFields) {
        return this.unselectNestedFields(data, fields, options);
      }

      const unselected = { ...data };

      fields.forEach(field => {
        if (this.hasProperty(unselected, field)) {
          delete unselected[field];
        }
      });

      if (options.defaultUnselectedFields) {
        options.defaultUnselectedFields.forEach(field => {
          if (this.hasProperty(unselected, field)) {
            delete unselected[field];
          }
        });
      }

      return unselected;

    } catch (error) {
      return data;
    }
  }

  selectNestedFields(data, fields, options = {}) {
    const selected = {};
    const defaultFields = options.includeDefaultFields || [];
    const allFields = [...new Set([...fields, ...defaultFields])];
    
    allFields.forEach(fieldPath => {
      const value = this.getNestedProperty(data, fieldPath);
      if (value !== undefined) {
        this.setNestedProperty(selected, fieldPath, value);
      } else if (options.includeMissing !== false) {
        this.setNestedProperty(selected, fieldPath, null);
      }
    });
    
    return selected;
  }

  unselectNestedFields(data, fields, options = {}) {
    try {
      const unselected = this.deepClone(data);
      
      fields.forEach(fieldPath => {
        this.deleteNestedProperty(unselected, fieldPath);
      });

      if (options.defaultUnselectedFields) {
        options.defaultUnselectedFields.forEach(fieldPath => {
          this.deleteNestedProperty(unselected, fieldPath);
        });
      }

      return unselected;
    } catch (error) {
      return data;
    }
  }

  getNestedProperty(obj, path) {
    if (!obj || typeof obj !== 'object' || !path) {
      return undefined;
    }
    
    const parts = path.split('.');
    let current = obj;
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined;
      }
      
      current = current[part];
      
      if (current === undefined) {
        return undefined;
      }
    }
    
    return current;
  }

  setNestedProperty(obj, path, value) {
    if (!obj || typeof obj !== 'object' || !path) {
      return;
    }
    
    const parts = path.split('.');
    let current = obj;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      
      if (!current[part] || typeof current[part] !== 'object') {
        current[part] = {};
      }
      
      current = current[part];
    }
    
    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
  }

  deleteNestedProperty(obj, path) {
    if (!obj || typeof obj !== 'object' || !path) {
      return;
    }
    
    const parts = path.split('.');
    let current = obj;
    
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      
      if (!current[part] || typeof current[part] !== 'object') {
        return; 
      }
      
      current = current[part];
    }
    
    const lastPart = parts[parts.length - 1];
    delete current[lastPart];
  }

  hasProperty(obj, prop) {
    return obj && typeof obj === 'object' && obj.hasOwnProperty(prop);
  }

  getPropertyValue(obj, prop) {
    return obj[prop];
  }

  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
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