class PetController {
    constructor(petService) {
      this.petService = petService;
    }
  
    getAllPets(req, res) {
      console.log('Listando') 
      const users = this.petService.getAllPets();
      res.json(users);
    }
  
    addPet(req, res) {
      const pet = req.body;
      this.petService.addPet(pet);
      res.status(201).send('Pet added successfully');
    }
}
  
module.exports = PetController;
  