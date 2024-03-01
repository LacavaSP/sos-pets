class UserController {
    constructor(userService) {
      this.userService = userService;
    }
  
    getAllUsers(req, res) {
      console.log('Listando')
      console.log(this.userService)
      const users = this.userService.getAllUsers();
      res.json(users);
    }
  
    addUser(req, res) {
      const user = req.body;
      this.userService.addUser(user);
      res.status(201).send('User added successfully');
    }
}
  
module.exports = UserController;
  