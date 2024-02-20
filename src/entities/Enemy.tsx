/* eslint-disable @typescript-eslint/no-explicit-any */

import Character from "./Character";

class Enemy extends Character {
  emoji: string;
  attackName: string;
  constructor(
    username: string,
    level: number,
    emoji: string,
    attackName: string
  ) {
    super(username, level);
    this.emoji = emoji;
    this.attackName = attackName;
  }
  attack() {
    return `${this.username} ${this.attackName} you!`;
  }
}

export default Enemy;
