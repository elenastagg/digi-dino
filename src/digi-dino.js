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
Dinosaur.MAX_ENERGY = 80;
Dinosaur.MAX_SOCIAL = 80;
Dinosaur.MAX_CLEAN = 80;
Dinosaur.DEAD_FULL = 0;
Dinosaur.DEAD_FITNESS = 0;
Dinosaur.DEAD_ENERGY = 0;
Dinosaur.DEAD_SOCIAL = 0;
Dinosaur.DEAD_CLEAN = 0;

Dinosaur.prototype.isAlive = function isAlive() {
  return (
    this.fullness > Dinosaur.DEAD_FULL
    && this.fitness > Dinosaur.DEAD_FITNESS
    && this.energy > Dinosaur.DEAD_ENERGY
    && this.social > Dinosaur.DEAD_SOCIAL
    && this.cleanliness > Dinosaur.DEAD_CLEAN
  );
};

Dinosaur.prototype.dayPasses = function dayPasses() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.fullness -= 15;
    this.fitness -= 10;
    this.energy -= 10;
    this.social -= 5;
    this.cleanliness -= 5;
  }
};

Dinosaur.prototype.play = function play() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.fitness += 10;
    if (this.fitness > Dinosaur.MAX_FITNESS) {
      this.fitness = Dinosaur.MAX_FITNESS;
    }
  }
};

Dinosaur.prototype.feed = function feed() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.fullness += 10;
    this.cleanliness -= 5;
    this.fitness -= 5;
    if (this.fullness > Dinosaur.MAX_FULL) {
      this.fullness = Dinosaur.MAX_FULL;
    }
  }
};

Dinosaur.prototype.bedTime = function bedTime() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.energy += 10;
    this.social -= 5;
    if (this.energy > Dinosaur.MAX_ENERGY) {
      this.energy = Dinosaur.MAX_ENERGY;
    }
  }
};

Dinosaur.prototype.socialise = function socialise() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.social += 10;
    this.cleanliness -= 5;
    if (this.social > Dinosaur.MAX_SOCIAL) {
      this.social = Dinosaur.MAX_SOCIAL;
    }
  }
};

Dinosaur.prototype.pooperScooper = function pooperScooper() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died :-(');
  } else {
    this.cleanliness += 10;
    if (this.cleanliness > Dinosaur.MAX_CLEAN) {
      this.cleanliness = Dinosaur.MAX_CLEAN;
    }
  }
};


console.log('Hello');

module.exports = Dinosaur;
