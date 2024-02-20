/* eslint-disable @typescript-eslint/no-unused-vars */
import Hero from "../../entities/Hero";

function CreateHero() {
  const username = prompt("What's your name ?");
  const level = prompt("What's your level ?");
  const weapon = prompt("What's your weapon ?");

  // if (isNaN(username) || isNaN(level) || isNaN(weapon)) {
  //   console.log("Flemmard!");
  // }

  const hero = new Hero(username, level, weapon);

  return (
    <>
      <ul>
        <li>{hero.username}</li>
        <li>{hero.level}</li>
        <li>{hero.weapon}</li>
        <li>{hero.attack()}</li>
      </ul>
    </>
  );
}

export default CreateHero;
