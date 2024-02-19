/* eslint-disable @typescript-eslint/no-explicit-any */

import Character from "./Character";

class Enemy extends Character {
  emoji: string;
  attackName: string;
  constructor(name: string, level: number, emoji: string, attackName: string) {
    super(name, level);
    this.emoji = emoji;
    this.attackName = attackName;
  }
  attack() {
    return `${this.name} ${this.attackName} you!`;
  }
}

export default Enemy;
