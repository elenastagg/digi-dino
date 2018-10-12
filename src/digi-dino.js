function Dinosaur(name) {
  this.name = name;
  this.fullness = 25;
  this.fitness = 25;
  this.energy = 40;
  this.social = 40;
  this.cleanliness = 40;
}

Dinosaur.MAX_FULL = 50;
Dinosaur.MAX_FITNESS = 50;
Dinosaur.MAX_ENERGY = 90;
Dinosaur.MAX_SOCIAL = 90;
Dinosaur.MAX_CLEAN = 90;
Dinosaur.DEAD_FULL = 0;
Dinosaur.DEAD_FITNESS = 0;
Dinosaur.DEAD_ENERGY = 0;
Dinosaur.DEAD_SOCIAL = 0;
Dinosaur.DEAD_CLEAN = 0;

module.exports = Dinosaur;
