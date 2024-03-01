const express = require('express');
const PetController = require('../controllers/petController');
const PetService = require('../services/petService')
const PetRepository= require('../repositories/petRepository')
const {petMiddleware} = require('../middlewares')

const router = express.Router();

const petRepository = new PetRepository()
const petService = new PetService(petRepository)
const petController = new PetController(petService)
 
router.get('/pets', (req, res) => petController.getAllPets(req, res));
router.post('/pets', petMiddleware, (req, res) => petController.addPet(req, res));

module.exports = router;
