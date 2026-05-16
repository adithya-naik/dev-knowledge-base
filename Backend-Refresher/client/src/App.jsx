import React from "react";

const App = () => {
  const SERVER_URL = "http://localhost:8000/";
  async function handleClick() {
    try {
      // learn how to use axios also
      // when evr we use fecth convert the result into json

      // This gives CROS error, so add this origin in server  
      const result = await fetch(`${SERVER_URL}`);
      let data = await result.json();
      console.log("Result : ", result);
      console.log("Data : ", data);
    } catch (error) {}
  }

  return (
    <div>
      <button onClick={() => handleClick()}>Send</button>
    </div>
  );
};

export default App;
