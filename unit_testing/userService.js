// userService.js
// A simple user service for managing users in memory

class UserService {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  createUser(name, email) {
    if (!name || !email) throw new Error('Name and email are required');
    if (this.users.some(u => u.email === email)) throw new Error('Email already exists');
    const user = { id: this.nextId++, name, email };
    this.users.push(user);
    return user;
  }

  getUserById(id) {
    return this.users.find(u => u.id === id) || null;
  }

  updateUser(id, updates) {
    const user = this.getUserById(id);
    if (!user) throw new Error('User not found');
    if (updates.email && this.users.some(u => u.email === updates.email && u.id !== id)) {
      throw new Error('Email already exists');
    }
    Object.assign(user, updates);
    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new Error('User not found');
    this.users.splice(index, 1);
    return true;
  }

  listUsers() {
    return [...this.users];
  }
}

module.exports = UserService;
