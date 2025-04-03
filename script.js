const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
};

//// 1st practice
for (let items of adventurer.inventory) {
  console.log(items);
}
