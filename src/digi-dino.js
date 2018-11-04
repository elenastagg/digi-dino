function Dinosaur(name) {
  this.name = name;
  this.fullness = 50;
  this.fitness = 50;
  this.energy = 50;
  this.social = 50;
  this.cleanliness = 50;
}

Dinosaur.MAX_FULL = 100;
Dinosaur.MAX_FITNESS = 100;
Dinosaur.MAX_ENERGY = 100;
Dinosaur.MAX_SOCIAL = 100;
Dinosaur.MAX_CLEAN = 100;
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
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.fullness -= 10;
    this.fitness -= 10;
    this.energy -= 10;
    this.social -= 5;
    this.cleanliness -= 5;
  }
};

Dinosaur.prototype.play = function play() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.fitness += 20;
    if (this.fitness > Dinosaur.MAX_FITNESS) {
      this.fitness = Dinosaur.MAX_FITNESS;
    }
  }
};

Dinosaur.prototype.feed = function feed() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.fullness += 20;
    this.cleanliness -= 5;
    this.fitness -= 5;
    if (this.fullness > Dinosaur.MAX_FULL) {
      this.fullness = Dinosaur.MAX_FULL;
    }
  }
};

Dinosaur.prototype.bedTime = function bedTime() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.energy += 20;
    this.social -= 5;
    if (this.energy > Dinosaur.MAX_ENERGY) {
      this.energy = Dinosaur.MAX_ENERGY;
    }
  }
};

Dinosaur.prototype.socialise = function socialise() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.social += 20;
    this.cleanliness -= 5;
    if (this.social > Dinosaur.MAX_SOCIAL) {
      this.social = Dinosaur.MAX_SOCIAL;
    }
  }
};

Dinosaur.prototype.pooperScooper = function pooperScooper() {
  if (!this.isAlive()) {
    throw new Error('Sorry, your dinosaur has died!');
  } else {
    this.cleanliness += 20;
    if (this.cleanliness > Dinosaur.MAX_CLEAN) {
      this.cleanliness = Dinosaur.MAX_CLEAN;
    }
  }
};

module.exports = Dinosaur;
