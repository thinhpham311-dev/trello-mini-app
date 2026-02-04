function Board(data) {
  data = data || {};
  
  this.id = data.id || '';
  this.name = data.name || '';
  this.description = data.description || '';
  
  this.createdAt = data.createdAt || new Date().toISOString();
  this.updatedAt = data.updatedAt || new Date().toISOString();
  
  this.members = data.members || [];
  
  this.settings = data.settings || {
    privacy: 'private',
    allowInvites: true,
    defaultCardStatus: 'todo'
  };
  
  this.status = data.status || 'active'; 
  this.stats = data.stats || {
    totalCards: 0,
    totalTasks: 0,
    totalMembers: 1 
  };
  
  this.cardIds = data.cardIds || [];
}

Board.prototype.validate = function() {
  var errors = [];
  
  if (!this.name || typeof this.name !== 'string' || !this.name.trim()) {
    errors.push('Board name is required');
  }
  
  if (this.name && this.name.length > 100) {
    errors.push('Board name cannot exceed 100 characters');
  }
  
  if (this.description && this.description.length > 1000) {
    errors.push('Description cannot exceed 1000 characters');
  }
  

  const validStatuses = ['active', 'archived'];
  if (this.status && !validStatuses.includes(this.status)) {
    errors.push('Status must be either "active" or "archived"');
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
};

Board.prototype.toJSON = function() {
  return {
    name: this.name,
    description: this.description,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    members: this.members,
    settings: this.settings,
    status: this.status,
    stats: this.stats,
    cardIds: this.cardIds,
  };
};


Board.create = function(data) {
  return new Board({
    name: data.name || '',
    description: data.description || '',
  });
};

module.exports = {
  Board: Board
};