import React from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const SERVER_URL = "http://localhost:8000/";
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    city: "",
  });

  // Get Method
  async function handleClick() {
    try {
      // This gives CROS error, so add this origin in server
      // const result = await fetch(`${SERVER_URL}`);
      // let data = await result.json();
      // console.log("Result : ", result);
      // console.log("Data : ", data);

      const result = await axios.get(`${SERVER_URL}`);
      // access the data from .data
      console.log("Result from axios : ", result);
      console.log("Result from axios : ", result.data);
    } catch (error) {
      console.log(error);
    }
  }

  // Post Method
  async function handleSubmit() {
    try {
      const result = await axios.post(`${SERVER_URL}`, {
        name: userData.name,
        age: userData.age,
        city: userData.city,
      });
      // access the data from .data
      console.log("From Server result: ", result);
      console.log("From Server data : ", result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <p>This gets data from "/" route : </p>
      <button onClick={() => handleClick()}>Send</button>

      <div>
        <p>This posts data to "/" route : </p>
        <input
          type="text"
          placeholder="name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />

        <input
          type="number"
          placeholder="age"
          value={userData.age}
          onChange={(e) => setUserData({ ...userData, age: e.target.value })}
        />

        <input
          type="text"
          placeholder="city"
          value={userData.city}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
        />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default App;
