/* eslint-disable @typescript-eslint/no-unused-vars */

function Fetch() {
  const getData = () => {
    fetch("https://random-data-api.com/api/coffee/random_coffee")
      .then((response) => response.json())
      .then((dataCoffee) => console.log(dataCoffee));

    fetch("https://random-data-api.com/api/v2/beers")
      .then((response) => response.json())
      .then((dataBeer) => console.log(dataBeer));
  };

  return (
    <>
      <button className="control_btn" onClick={getData}>
        Fetch
      </button>
    </>
  );
}

export default Fetch;
