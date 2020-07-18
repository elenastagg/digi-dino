const Dinosaur = require("../src/digi-dino");

let myDinosaur;

beforeEach(() => {
  myDinosaur = new Dinosaur("Derek");
});

describe("creating a new Dinosaur", () => {
  it("creates an object with properties", () => {
    expect(myDinosaur.name).toEqual("Derek");
    expect(myDinosaur.fullness).toEqual(50);
    expect(myDinosaur.fitness).toEqual(50);
    expect(myDinosaur.energy).toEqual(50);
    expect(myDinosaur.social).toEqual(50);
    expect(myDinosaur.cleanliness).toEqual(50);
  });
});

describe("a day passing", () => {
  beforeEach(() => {
    myDinosaur.dayPasses();
  });
  it("gets hungry, reducing the fullness by 10", () => {
    expect(myDinosaur.fullness).toBe(40);
  });

  it("gets unfit, reducing the fitness by 10", () => {
    expect(myDinosaur.fitness).toBe(40);
  });

  it("gets tired, reducing the energy by 10", () => {
    expect(myDinosaur.energy).toBe(40);
  });

  it("gets dirty reducing the cleanliness by 5", () => {
    expect(myDinosaur.social).toBe(45);
  });

  it("gets lonely reducing the social by 5", () => {
    expect(myDinosaur.cleanliness).toBe(45);
  });
});

describe("play", () => {
  it("increments the fitness by 20", () => {
    myDinosaur.play();
    expect(myDinosaur.fitness).toBe(70);
  });

  it("doesn`t go past the max fitness", () => {
    myDinosaur.play();
    myDinosaur.play();
    myDinosaur.play();
    expect(myDinosaur.fitness).toBe(Dinosaur.MAX_FITNESS);
  });
});

describe("feed", () => {
  beforeEach(() => {
    myDinosaur.feed();
  });
  it("increments the fullness by 20", () => {
    expect(myDinosaur.fullness).toBe(70);
  });
  it("doesn`t go past the max fullness", () => {
    myDinosaur.feed();
    myDinosaur.feed();
    myDinosaur.feed();
    expect(myDinosaur.fullness).toBe(Dinosaur.MAX_FULL);
  });
  it("reduces cleanliness by 5", () => {
    expect(myDinosaur.cleanliness).toBe(45);
  });
  it("reduces fitness by 5", () => {
    expect(myDinosaur.fitness).toBe(45);
  });
});

describe("bedtime", () => {
  beforeEach(() => {
    myDinosaur.bedTime();
  });
  it("increments the energy by 20", () => {
    expect(myDinosaur.energy).toBe(70);
  });
  it("doesn`t go past the max energy", () => {
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    myDinosaur.bedTime();
    expect(myDinosaur.energy).toBe(Dinosaur.MAX_ENERGY);
  });
  it("decreases the social by 5", () => {
    expect(myDinosaur.social).toBe(45);
  });
});

describe("socialise", () => {
  beforeEach(() => {
    myDinosaur.socialise();
  });
  it("increments the social by 20", () => {
    expect(myDinosaur.social).toBe(70);
  });
  it("doesn`t go past the max social", () => {
    myDinosaur.socialise();
    myDinosaur.socialise();
    myDinosaur.socialise();
    myDinosaur.socialise();
    expect(myDinosaur.social).toBe(Dinosaur.MAX_SOCIAL);
  });
  it("decreases the cleanliness by 5", () => {
    expect(myDinosaur.cleanliness).toBe(45);
  });
});

describe("pooper-scooper", () => {
  it("increments the cleanliness by 20", () => {
    myDinosaur.pooperScooper();
    expect(myDinosaur.cleanliness).toBe(70);
  });
  it("doesn`t go past the max cleanliness", () => {
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    myDinosaur.pooperScooper();
    expect(myDinosaur.cleanliness).toEqual(Dinosaur.MAX_CLEAN);
  });
});

describe("isAlive", () => {
  beforeEach(() => {
    myDinosaur.isAlive();
  });
  it("returns false if fullness is <= 0", () => {
    myDinosaur.fullness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it("returns false if fitness is <= 0", () => {
    myDinosaur.fitness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it("returns false if energy is <= 0", () => {
    myDinosaur.energy = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it("returns false if social is <= 0", () => {
    myDinosaur.social = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
  it("returns false if cleanliness is <= 0", () => {
    myDinosaur.cleanliness = 0;
    expect(myDinosaur.isAlive()).toEqual(false);
  });
});
