class Park {

  constructor(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  };

  addDinosaur(dino) {
    this.dinosaurs.push(dino);
  };

  removeDinosaur(dino) {
    this.dinosaurs.splice(this.dinosaurs.indexOf(dino), 1);
  };

  mostPopularDino() {
    let topDino = this.dinosaurs[0];
    for (var i = 0; i < this.dinosaurs.length; i++) {
      if (this.dinosaurs[i].guestsAttractedPerDay > topDino.guestsAttractedPerDay){
        topDino = this.dinosaurs[i];
      }
    }
    return topDino.species;
  };

  findSpecies(species) {
    let speciesArray = [];
    for (var i = 0; i < this.dinosaurs.length; i++) {
      if (this.dinosaurs[i].species === species){
      speciesArray.push(species)
      }
    }
    return speciesArray;
  };

  removeSpecies(rex) {
    for (var i = this.dinosaurs.length-1; i >= 0; i--) {
      if (this.dinosaurs[i].species === rex){
        this.dinosaurs.splice(i, 1);
      }
    }
  };

  dailyVisitors() {
    var totalVisitors = 0;
    for (let dinos of this.dinosaurs) {
      totalVisitors += dinos.guestsAttractedPerDay;
    }
    return totalVisitors;
  };

  yearlyVistors() {
    return this.dailyVisitors() * 365;
  };

  totalRevenue() {
    return this.yearlyVistors() * this.ticketPrice;
  };

  // dietTypes(type1, type2) {
  //   let types = {
  //     carnivore = 0;
  //     herbivorous = 0;
  //   }
  //   for (var type of types) {
  //     
  //   }
}
module.exports = Park;
