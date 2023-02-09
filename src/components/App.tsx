import React, { useEffect } from "react";
import Login from "./Login";

const App = () => {
  
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      window.location.assign("/Home");
    }
  }, []);

  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
