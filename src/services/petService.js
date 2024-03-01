class PetService {
    constructor(petRepository) {
      this.petRepository = petRepository;
    }
  
    getAllPets() {
      return this.petRepository.getAllPets();
    }
  
    addPet(pet) {
      this.petRepository.addPet(pet);
    }
  }
  
  module.exports = PetService;
  