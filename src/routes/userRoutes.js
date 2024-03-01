const express = require('express');
const UserController = require('../controllers/userController');
const UserService = require('../services/userService')
const UserRepository= require('../repositories/userRepository')
const {userMiddleware} = require('../middlewares')

const router = express.Router();

const userRepository = new UserRepository()
const userService = new UserService(userRepository)
const userController = new UserController(userService)
 
router.get('/users', (req, res) => userController.getAllUsers(req, res));
router.post('/users', userMiddleware, (req, res) => userController.addUser(req, res));

module.exports = router;
