const Dinosaur = require('../src/digi-dino');

let myDinosaur;

beforeEach(() => {
  myDinosaur = new Dinosaur('Derek');
});

describe('creating a new Dinosaur', () => {
  it('creates an object with properties', () => {
    expect(myDinosaur.name).toEqual('Derek');
    expect(myDinosaur.fullness).toEqual(25);
    expect(myDinosaur.fitness).toEqual(25);
    expect(myDinosaur.energy).toEqual(40);
    expect(myDinosaur.social).toEqual(40);
    expect(myDinosaur.cleanliness).toEqual(40);
  });
});

describe('a day passing', () => {
  beforeEach(() => {
    myDinosaur.dayPasses();
  });
  it('gets hungry, reducing the fullness by 15', () => {
    expect(myDinosaur.fullness).toBe(10);
  });

  it('gets unfit, reducing the fitness by 10', () => {
    expect(myDinosaur.fitness).toBe(15);
  });

  it('gets tired, reducing the energy by 10', () => {
    expect(myDinosaur.energy).toBe(30);
  });

  it('gets dirty reducing the cleanliness by 5', () => {
    expect(myDinosaur.social).toBe(35);
  });

  it('gets lonely reducing the social by 5', () => {
    expect(myDinosaur.cleanliness).toBe(35);
  });
});

describe('play', () => {
  it('increments the fitness by 10', () => {
    myDinosaur.play();
    expect(myDinosaur.fitness).toBe(35);
  });

  it('doesn`t go past the max fitness', () => {
    myDinosaur.play();
    myDinosaur.play();
    myDinosaur.play();
    expect(myDinosaur.fitness).toBe(Dinosaur.MAX_FITNESS);
  });
});

describe('feed', () => {
  beforeEach(() => {
    myDinosaur.feed();
  });
  it('increments the fullness by 10', () => {
    expect(myDinosaur.fullness).toBe(35);
  });
  it('doesn`t go past the max fullness', () => {
    myDinosaur.feed();
    myDinosaur.feed();
    myDinosaur.feed();
    expect(myDinosaur.fullness).toBe(Dinosaur.MAX_FULL);
  });
  it('reduces cleanliness by 5', () => {
    expect(myDinosaur.cleanliness).toBe(35);
  });
  it('reduces fitness by 5', () => {
    expect(myDinosaur.fitness).toBe(20);
  });
});

describe('bedtime', () => {
  beforeEach(() => {
    myDinosaur.bedTime();
  });
  it('increments the energy by 10', () => {
    expect(myDinosaur.energy).toBe(50);
  });
  it('doesn`t go past the max energy', () => {
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    expect(myDinosaur.energy).toBe(Dinosaur.MAX_ENERGY);
  });
  it('decreases the social by 5', () => {
    expect(myDinosaur.social).toBe(35);
  });
});

describe('socialise', () => {
  beforeEach(() => {
    myDinosaur.socialise();
  });
  it('increments the social by 10', () => {
    expect(myDinosaur.social).toBe(50);
  });
  it('doesn`t go past the max social', () => {
    myDinosaur.socialise();
    myDinosaur.socialise();
    myDinosaur.socialise();
    myDinosaur.socialise();
    expect(myDinosaur.social).toBe(Dinosaur.MAX_SOCIAL);
  });
  it('decreases the cleanliness by 5', () => {
    expect(myDinosaur.cleanliness).toBe(35);
  });
});

describe('pooper-scooper', () => {
  it('increments the cleanliness by 10', () => {
    myDinosaur.pooperScooper();
    expect(myDinosaur.cleanliness).toBe(50);
  });
  it('doesn`t go past the max cleanliness', () => {
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    expect(myDinosaur.cleanliness).toEqual(Dinosaur.MAX_CLEAN);
  });
});

describe('isAlive', () => {
  beforeEach(() => {
    myDinosaur.isAlive();
  });
  it('returns false if fullness is <= 0', () => {
    myDinosaur.fullness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it('returns false if fitness is <= 0', () => {
    myDinosaur.fitness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it('returns false if energy is <= 0', () => {
    myDinosaur.energy = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it('returns false if social is <= 0', () => {
    myDinosaur.social = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it('returns false if cleanliness is <= 0', () => {
    myDinosaur.cleanliness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
});
