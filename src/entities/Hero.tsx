/* eslint-disable @typescript-eslint/no-explicit-any */

import Character from "./Character";

class Hero extends Character {
  weapon: string;
  constructor(username: string, level: number, weapon: string) {
    super(username, level);
    this.weapon = weapon;
  }
  attack = () => {
    return `Hello I'm ${this.username} and I hit you!`;
  };
}

export default Hero;
