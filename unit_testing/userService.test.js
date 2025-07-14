// userService.test.js
const UserService = require('./userService');

describe('UserService', () => {
  let service;
  beforeEach(() => {
    service = new UserService();
  });

  test('creates a user', () => {
    const user = service.createUser('Alice', 'alice@example.com');
    expect(user).toMatchObject({ name: 'Alice', email: 'alice@example.com' });
    expect(user.id).toBe(1);
  });

  test('throws if email already exists', () => {
    service.createUser('Alice', 'alice@example.com');
    expect(() => service.createUser('Bob', 'alice@example.com')).toThrow('Email already exists');
  });

  test('gets user by id', () => {
    const user = service.createUser('Alice', 'alice@example.com');
    expect(service.getUserById(user.id)).toEqual(user);
    expect(service.getUserById(999)).toBeNull();
  });

  test('updates user', () => {
    const user = service.createUser('Alice', 'alice@example.com');
    const updated = service.updateUser(user.id, { name: 'Alicia' });
    expect(updated.name).toBe('Alicia');
  });

  test('throws if updating to existing email', () => {
    service.createUser('Alice', 'alice@example.com');
    const user2 = service.createUser('Bob', 'bob@example.com');
    expect(() => service.updateUser(user2.id, { email: 'alice@example.com' })).toThrow('Email already exists');
  });

  test('deletes user', () => {
    const user = service.createUser('Alice', 'alice@example.com');
    expect(service.deleteUser(user.id)).toBe(true);
    expect(service.getUserById(user.id)).toBeNull();
  });

  test('throws if deleting non-existent user', () => {
    expect(() => service.deleteUser(123)).toThrow('User not found');
  });

  test('lists users', () => {
    service.createUser('Alice', 'alice@example.com');
    service.createUser('Bob', 'bob@example.com');
    const users = service.listUsers();
    expect(users.length).toBe(2);
    expect(users[0].name).toBe('Alice');
    expect(users[1].name).toBe('Bob');
  });
});
