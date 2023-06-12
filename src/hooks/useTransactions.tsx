import { useState } from "react";
const useTransactions = () => {
  const [showMenu, setShowMenu] = useState("hide");
  const mostrarMenu = () => {
    if (showMenu === "show") {
      setShowMenu("hide");
      return;
    }
    
    setShowMenu("show");
  };

  return {
    showMenu,
    mostrarMenu,
  };
};

export { useTransactions };
