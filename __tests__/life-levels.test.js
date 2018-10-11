const Dinosaur = require('../src/digi-dino');

let myDinosaur

beforeEach(() => {
  myDinosaur = new Dinosaur('Derek');
});

describe('creating a new Dinosaur', () => {
  it('creates an object with properties', () => {
    expect(myDinosaur.name).toEqual('Derek')
    expect(myDinosaur.fullness).toEqual(25);
    expect(myDinosaur.fitness).toEqual(25);
    expect(myDinosaur.energy).toEqual(45);
    expect(myDinosaur.social).toEqual(45);
    expect(myDinosaur.cleanliness).toEqual(45);
  });
});

describe('a day passing', () => {
  myDinosaur.dayPasses();
  it('gets hungry, reducing the fullness by 15', () => {
    expect(myDinosaur.fullness).toBe(10);
  });

  it('gets unfit, reducing the fitness by 10', () => {
    expect(myDinosaur.fitness).toBe(15);
  });

  it('gets tired, reducing the energy by 10', () => {
    expect(myDinosaur.energy).toBe(35);
  });

  it('gets dirty reducing the cleanliness by 5', () => {
    expect(myDinosaur.social).toBe(40);
  });

  it('gets lonely reducing the social by 5', () => {
    expect(myDinosaur.cleanliness).toBe(40);
  });

describe('play', () => {
  it('increments the fitness by 10', () => {
    myDinosaur.play();
    expect(myDinosaur.fitness).toBe(35);
  });
});

describe('feed', () => {
  myDinosaur.feed();
  it('increments the fullness by 10', () => {
    expect(myDinosaur.fullness).toBe(35);
  });
  it('reduces cleanliness by 5', () => {
    expect(myDinosaur.cleanliness).toBe(30);
  });
  it('reduces fitness by 5', () => {
    expect(myDinosaur.fitness).toBe(20)
  })
});

describe('bedtime', () => {
  myDinosaur.bedTime();
  it('increments the energy by 5', () => {
    expect(myDinosaur.energy).toBe(50);
  });
  it('decreases the social by 5', () => {
    expect(myDinosaur.social).toBe(40);
  });
});

describe('socialise', () => {
  myDinosaur.socialise();
  it('increments the social by 5', () => {
    expect(myDinosaur.social).toBe(50)
  });
  it('decreases the cleanliness by 5', () => {
    expect(myDinosaur.cleanliness).toBe(40)
  });
});

describe('pooper-scooper', () => {
  it('increments the cleanliness by 10', () => {
    myDinosaur.pooperScooper();
    expect(myDinosaur.cleanliness).toBe(55)
  });
});

describe('isAlive', () => {
  it('returns false if fullness is <= 0', () => {
    myDinosaur.fullness = 0;
    myDinosaur.fitness = 25;
    myDinosaur.energy = 30;
    myDinosaur.social = 30;
    myDinosaur.cleanliness = 30;
    expect(myDinosaur.isAlive()).toEqual(false)
  });
  it('returns false if fitness is <= 0', () => {
    myDinosaur.fullness = 25;
    myDinosaur.fitness = 0;
    myDinosaur.energy = 30;
    myDinosaur.social = 30;
    myDinosaur.cleanliness = 30;
    expect(myDinosaur.isAlive()).toEqual(false)
  });
  it('returns false if energy is <= 0', () => {
    myDinosaur.fullness = 25;
    myDinosaur.fitness = 25;
    myDinosaur.energy = 0;
    myDinosaur.social = 30;
    myDinosaur.cleanliness = 30;
    expect(myDinosaur.isAlive()).toEqual(false)

  });
  it('returns false if social is <= 0', () => {
    myDinosaur.fullness = 25;
    myDinosaur.fitness = 25;
    myDinosaur.energy = 30;
    myDinosaur.social = 0;
    myDinosaur.cleanliness = 30;
    expect(myDinosaur.isAlive()).toEqual(false)

  });
  it('returns false if cleanliness is <= 0', () => {
    myDinosaur.fullness = 25;
    myDinosaur.fitness = 25;
    myDinosaur.energy = 30;
    myDinosaur.social = 30;
    myDinosaur.cleanliness = 0;
    expect(myDinosaur.isAlive()).toEqual(false)
  });

});
