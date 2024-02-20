import "../../Scss.jsx";

function SayHello() {
  const name = prompt("What's your name ?");

  switch (name) {
    case "":
      return "Hello World";
      break;
    case undefined:
      return "Hello World";
      break;
    case null:
      return "Hello World";
      break;
    default:
      return "Hello " + name;
      break;
  }
}

export default SayHello;
