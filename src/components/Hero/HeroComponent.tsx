/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from "../../entities/Hero";

function CreateHero() {
  // const hero = new Hero("Pops", 1, "sword");
  const name = prompt("What's your name ?");
  const level = prompt("What's your level ?");
  const weapon = prompt("What's your weapon ?");

  const hero = new Hero(name, level, weapon);

  return (
    <>
      <ul>
        <li>{hero.name}</li>
        <li>{hero.level}</li>
        <li>{hero.weapon}</li>
      </ul>
    </>
  );
}

export default CreateHero;
