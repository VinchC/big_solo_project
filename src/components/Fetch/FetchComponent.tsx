/* eslint-disable @typescript-eslint/no-unused-vars */

function Fetch() {
  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((dataUser) => console.log(dataUser));

    fetch("https://random-data-api.com/api/v2/beers")
      .then((response) => response.json())
      .then((dataBeer) => console.log(dataBeer));
  };

  return (
    <>
      <div className="buttonCenter">
        <button className="control_btn" onClick={getData}>
          Fetch
        </button>
      </div>
    </>
  );
}

export default Fetch;
