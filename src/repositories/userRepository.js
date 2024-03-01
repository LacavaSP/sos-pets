class UserRepository {
  constructor() {
    this.users = [];
  }

  getAllUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
}

module.exports = UserRepository;
