// part one
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

//// 1st practice
for (let items of adventurer.inventory) {
  //   console.log(items);
}

// 2 practice
let subObj = {
  name: "Frank",
  type: "Flea",
  belongings: ["hat", "sunglasses"],
};
adventurer.companion.leo = subObj;

// console.log(adventurer.roll());
// console.log(adventurer.roll());
// console.log(adventurer.roll());

////
///////////////
//// part two

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// console.log(robin.companion.companion.roll());

//////
///////////
//// part three

class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  meow() {
    console.log(`${this.name} the ${this.type} meows!`);
    super.roll();
  }
}

const robinAdventure = new Adventurer("Robin", "Fighter");
robinAdventure.companion = new Companion("Leo", "Cat");
robinAdventure.companion.companion = new Companion("Frank", "Flea");
robinAdventure.companion.companion.inventory = ["small hat", "sunglasses"];
