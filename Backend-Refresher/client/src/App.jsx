import React from "react";
import axios from "axios";
const App = () => {
  const SERVER_URL = "http://localhost:8000/";
  async function handleClick() {
    try {
      // This gives CROS error, so add this origin in server
      // const result = await fetch(`${SERVER_URL}`);
      // let data = await result.json();
      // console.log("Result : ", result);
      // console.log("Data : ", data);

      const result = await axios.get(`${SERVER_URL}`);
      // access the data from .data
      console.log("Result from axios : ", result  );
      console.log("Result from axios : ", result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Send</button>
    </div>
  );
};

export default App;
