/* eslint-disable @typescript-eslint/no-unused-vars */

function Fetch() {
  const getData = () => {
    fetch("https://random-data-api.com/api/coffee/random_coffee")
      .then((response) => response.json())
      .then((data) => console.log(data));
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
