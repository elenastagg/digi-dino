const Dinosaur = require('../src/digi-dino');

describe('creating a new Dinosaur', () => {
  it('creates an object with properties' () => {
    expect(myDinosaur.name).toEqual('Derek')
    expect(myDinosaur.age).toEqual(1);
    expect(myDinosaur.fullness).toEqual(30);
    expect(myDinosaur.fitness).toEqual(30);
    expect(myDinosaur.energy).toEqual(30);
    expect(myDinosaur.social).toEqual(50);
    expect(myDinosaur.cleanliness).toEqual(50);
  });
}):

describe('a day passing', () => {
  it('increments the age by 1 each day', () => {
    myDinosaur.growUp();
    expect(myDinosaur.age).toEqual(2);
  });


});

  it('restarts if your dinosaur is dead', () => {
    myDinosaur.age = 100;
    expect(() => myDinosaur.growUp()).to
  });
});

describe('gets hungry', () =>
  it('decreases the hunger by 5 when a day passes', () => {

  });
});

describe('gets unfit', () => {
  it('decreases the ')
});

describe('it gets tired', () => {});

describe('it gets dirty', () => {});

describe('play', () => {
  myDinosaur.play();
  it('increments the fitness by 10', () => {
    expect(myDinosaur.fitness).toEqual();
  });
  it('reduces fullness by 5', () => {
    myDinosaur.play();
    expect(myDinosaur.age).toEqual(2);
  });
  it('increments the age by 1 each day', () => {
    myDinosaur.play();
    expect(myDinosaur.age).toEqual(2);
  });
});

describe('bedtime', () => {});

describe('socialise', () => {});

describe('pooper-scooper', () => {});

describe('isAlive', () => {});

describe('checkUp', () => {});
