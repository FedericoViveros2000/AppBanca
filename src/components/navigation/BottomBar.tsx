import "./styles/navbarBottom.css";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { RiBarChart2Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { useTransactions } from "../../hooks/useTransactions";
import { MenuTransactions } from "../transactions/MenuTransactions";

function BottomBar() {
  const { mostrarMenu, showMenu } = useTransactions();
  return (
    <>
      <nav className="container__navbarBottom">
        <ul className="container__navbarBottom--icons">
          <NavLink
            to="/Home"
            className={({ isActive }) =>
              isActive
                ? "icons__navbarBottom bg-bottom-bar-icon font-active"
                : "icons__navbarBottom font-inactive"
            }
          >
            <AiFillHome />
          </NavLink>
          <NavLink
            to="/History"
            className={({ isActive }) =>
              isActive
                ? "icons__navbarBottom bg-bottom-bar-icon  font-active"
                : "icons__navbarBottom  font-inactive"
            }
          >
            <RiBarChart2Fill />
          </NavLink>
          <AiFillPlusCircle
            className="translateY bg-plus"
            onClick={mostrarMenu}
          />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "icons__navbarBottom bg-bottom-bar-icon font-active"
                : "icons__navbarBottom font-inactive"
            }
          >
            <FaWallet />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "icons__navbarBottom bg-bottom-bar-icon font-active"
                : "icons__navbarBottom font-inactive"
            }
          >
            <HiUsers />
          </NavLink>
        </ul>
      </nav>
      <MenuTransactions showMenu={showMenu} mostrarMenu={mostrarMenu} />
    </>
  );
}

export { BottomBar };
