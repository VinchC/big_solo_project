/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import FetchAxiosCard from "./FetchAxiosCard.tsx";
import { useState } from "react";

function FetchAxios() {
  const [user, setUser] = useState();
  const getUser = () => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUser(response.data.results[0]);
    });
  };

  return (
    <div>
      {user && (
        <FetchAxiosCard
          firstname={user.name.first}
          lastname={user.name.last}
          image={user.picture.medium}
          email={user.email}
        />
      )}
      <div className="buttonCenter">
        <button type="button" className="control_btn" onClick={getUser}>
          Get User
        </button>
      </div>
    </div>
  );
}

export default FetchAxios;
