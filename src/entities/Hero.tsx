/* eslint-disable @typescript-eslint/no-explicit-any */

import Character from "./Character";

class Hero extends Character {
  weapon: string;
  constructor(name: string, level: number, weapon: string) {
    super(name, level);
    this.weapon = weapon;
  }
  attack() {
    return `Hello I'm ${this.name} and I hit you!`;
  }
}

export default Hero;

// const hero = new Hero("Héros", 100, "sword");
// console.log(spider.name);
// console.log(hero.level);
// console.log(hero);
// console.log(spider.attack());
// console.log(hero.attack());
