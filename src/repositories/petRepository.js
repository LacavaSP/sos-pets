class PetRepository {
  constructor() {
    this.pets = [];
  }

  getAllPets() {
    return this.pets;
  }

  addPet(pet) {
    this.pets.push(pet);
  }
}

module.exports = PetRepository;
