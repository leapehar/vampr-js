class Vampire {
  constructor (name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;

  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {

    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVapires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVapires++;
    }

    return numberOfVapires

  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {


  }

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {

    if (this.name === name) {
      return this;
    }
    for (let vamp of this.offspring) {
      const temp = vamp.vampireWithName(name);
      if (temp === null) {
        continue;
      }
      return temp;
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {

    let total = this.offspring.length;

    for (const vamp of this.offspring) {
      const totalBabyVamps = vamp.totalDescendents;
      total = total + totalBabyVamps;
    }

    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let millennials = [];

    if (this.yearConverted > 1980) {
      millennials.push(this);
    }

    for (const vamp of this.offspring) {
      const millenialVamps = vamp.allMillennialVampires;
      millennials = millennials.concat(millenialVamps);

    }

    return millennials;
  }

}




module.exports = Vampire;


