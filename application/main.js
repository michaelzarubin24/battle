"use strict";
alert("Welcome!");

const obj1 = {
  name: "Apple",
  damage: 15,
  hp: 100,
};
const obj2 = {
  name: "Samsung",
  damage: 20,
  hp: 90,
};

const result = battle(obj1, obj2);

function battle(obj1, obj2) {
  obj2["hp"] = obj2["hp"] - obj1["damage"];
  return [obj1, obj2];
}

console.log(result);
