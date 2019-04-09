const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;
  let dino4;

  beforeEach( () => {
    park = new Park('Jurassic Park', 100, []);
    dino1 = new Dinosaur('T-rex', 'carnivore', 50);
    dino2 = new Dinosaur('Velociraptor', 'carnivore', 20);
    dino3 = new Dinosaur('Talarurus', 'herbivorous', 30);
    dino4 = new Dinosaur('Saltopus', 'carnivore', 40);
  })

  test('should have a name', () => {
    expect(park.name).toBe('Jurassic Park');
  });

  test('should have a ticket price', () => {
    expect(park.ticketPrice).toBe(100);
  });

  test('should have a collection of dinosaurs', () => {
    expect(park.dinosaurs).toEqual([]);
  });

  test('should be able to add a dinosaur to its collection', () => {
    park.addDinosaur(dino1);
    expect(park.dinosaurs.length).toBe(1);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    park.addDinosaur(dino2);
    park.removeDinosaur(dino2);
    expect(park.dinosaurs.length).toBe(0);
  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.mostPopularDino()).toBe('T-rex');
  });

  test('should be able to find all dinosaurs of a particular species', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.findSpecies('T-rex')).toEqual(['T-rex']);
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    park.removeSpecies('T-rex');
    expect(park.dinosaurs.length).toBe(3);
  });

  test('Calculate total number of visitors per day', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.dailyVisitors()).toBe(140);
  });

  test('Calculate total number of visitors per year', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.yearlyVistors()).toBe(51100);
  });

  test('Calculate the total revenue from ticket sales for one year', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.totalRevenue()).toBe(5110000);
  });

  xtest('get special object of dinosaurs', () => {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino4);
    expect(park.dietTypes('carnivore', 'herbivorous')).toBe('carnivore', 'herbivorous');
  });

});
