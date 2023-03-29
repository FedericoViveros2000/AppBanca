import React, { useEffect } from "react";
import LoginPage from "../views/LoginPage";

const App = () => {
  
  useEffect(() => {
    if (localStorage.getItem("userData")) {
      window.location.assign("/Home");
    }
  }, []);

  return (
    <div className="App">
      
      <LoginPage />
    </div>
  );
};

export default App;
