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

// setInterval(do something, 5000[milliseconds])
Dinosaur.prototype.dayPasses = function dayPasses() {
  this.fullness -= 15;
  this.fitness -= 10;
  this.energy -= 10;
  this.social -= 5;
  this.cleanliness -= 5;
};

Dinosaur.prototype.play = function play() {
  this.fitness += 10;
  if (this.fitness > Dinosaur.MAX_FITNESS) {
    this.fitness = Dinosaur.MAX_FITNESS;
  }
};

Dinosaur.prototype.feed = function feed() {
  this.fullness += 10;
  this.cleanliness -= 5;
  this.fitness -= 5;
  if (this.fullness > Dinosaur.MAX_FULL) {
    this.fullness = Dinosaur.MAX_FULL;
  }
};

Dinosaur.prototype.bedTime = function bedTime() {
  this.energy += 5;
  this.social -= 5;
};

Dinosaur.prototype.socialise = function socialise() {
  this.social += 5;
  this.cleanliness -= 5;
};

Dinosaur.prototype.pooperScooper = function pooperScooper() {
  this.cleanliness += 10;
};

Dinosaur.prototype.isAlive = function isAlive() {
  return (
    this.fullness > Dinosaur.DEAD_FULL
    && this.fitness > Dinosaur.DEAD_FITNESS
    && this.energy > Dinosaur.DEAD_ENERGY
    && this.social > Dinosaur.DEAD_SOCIAL
    && this.cleanliness > Dinosaur.DEAD_CLEAN
  );
};

module.exports = Dinosaur;
