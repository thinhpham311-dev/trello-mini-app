// src/utils/response.js

/**
 * Success response helper
 * @param {object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {any} data - Response data
 * @param {string} message - Optional message
 */
const successResponse = function(res, statusCode, data, message = null) {
  const response = {
    success: true,
    data: data,
    timestamp: new Date().toISOString()
  };
  
  if (message) {
    response.message = message;
  }
  
  return res.status(statusCode).json(response);
};

/**
 * Error response helper
 * @param {object} res - Express response object
 * @param {number} statusCode - HTTP status code
 * @param {string} error - Error message
 * @param {any} details - Additional error details
 */
const errorResponse = function(res, statusCode, error, details = null) {
  const response = {
    success: false,
    error: error,
    timestamp: new Date().toISOString()
  };
  
  if (details) {
    response.details = details;
  }
  
  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error(`[${statusCode}] ${error}`, details || '');
  }
  
  return res.status(statusCode).json(response);
};

/**
 * Validation error response
 * @param {object} res - Express response object
 * @param {Array} errors - Validation errors array
 */
const validationErrorResponse = function(res, errors) {
  return res.status(400).json({
    success: false,
    error: 'Validation failed',
    errors: errors,
    timestamp: new Date().toISOString()
  });
};

/**
 * Not found response
 * @param {object} res - Express response object
 * @param {string} resource - Resource name
 */
const notFoundResponse = function(res, resource = 'Resource') {
  return errorResponse(res, 404, `${resource} not found`);
};

/**
 * Unauthorized response
 * @param {object} res - Express response object
 * @param {string} message - Custom message
 */
const unauthorizedResponse = function(res, message = 'Unauthorized access') {
  return errorResponse(res, 401, message);
};

/**
 * Forbidden response
 * @param {object} res - Express response object
 * @param {string} message - Custom message
 */
const forbiddenResponse = function(res, message = 'Access forbidden') {
  return errorResponse(res, 403, message);
};

/**
 * Bad request response
 * @param {object} res - Express response object
 * @param {string} message - Custom message
 */
const badRequestResponse = function(res, message = 'Bad request') {
  return errorResponse(res, 400, message);
};

/**
 * Internal server error response
 * @param {object} res - Express response object
 * @param {Error} error - Error object
 */
const internalErrorResponse = function(res, error = null) {
  const message = 'Internal server error';
  const details = process.env.NODE_ENV === 'development' && error ? 
    { message: error.message, stack: error.stack } : null;
  
  return errorResponse(res, 500, message, details);
};

/**
 * Created response (201)
 * @param {object} res - Express response object
 * @param {any} data - Created resource data
 * @param {string} message - Success message
 */
const createdResponse = function(res, data, message = 'Resource created successfully') {
  return successResponse(res, 201, data, message);
};

/**
 * No content response (204)
 * @param {object} res - Express response object
 */
const noContentResponse = function(res) {
  return res.status(204).send();
};

/**
 * Paginated response
 * @param {object} res - Express response object
 * @param {Array} data - Data array
 * @param {number} page - Current page
 * @param {number} limit - Items per page
 * @param {number} total - Total items
 */
const paginatedResponse = function(res, data, page, limit, total) {
  const totalPages = Math.ceil(total / limit);
  
  return successResponse(res, 200, {
    data: data,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: total,
      totalPages: totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1
    }
  });
};

module.exports = {
  // Basic responses
  successResponse,
  errorResponse,
  
  // Specific error responses
  validationErrorResponse,
  notFoundResponse,
  unauthorizedResponse,
  forbiddenResponse,
  badRequestResponse,
  internalErrorResponse,
  
  // Success responses
  createdResponse,
  noContentResponse,
  paginatedResponse
};