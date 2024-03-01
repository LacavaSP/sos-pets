class UserService {
    constructor(userRepository) {
      this.userRepository = userRepository;
    }
  
    getAllUsers() {
      return this.userRepository.getAllUsers();
    }
  
    addUser(user) {
      this.userRepository.addUser(user);
    }
  }
  
  module.exports = UserService;
  