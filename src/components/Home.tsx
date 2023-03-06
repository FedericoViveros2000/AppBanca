import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      window.location.assign("/");
    }
  }, []);

  return <div>Pantalla de inicio</div>;
};

export default Home;
