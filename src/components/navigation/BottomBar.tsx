import './styles/navbarBottom.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai'
import { RiBarChart2Fill } from 'react-icons/ri'
import { FaWallet } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import { useTransactions } from '../../hooks/useTransactions'
import { MenuTransactions } from '../transactions/MenuTransactions'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'

const BottomBar: React.FC = () => {
  const { mostrarMenu, showMenu } = useTransactions()
  const { viewNavigate } = useViewTransition()
  return (
    <>
      <nav className="container__navbarBottom">
        <ul className="container__navbarBottom--icons">
          <span
            // to="/Home"
            onClick={() => viewNavigate('/Home')}
            className={'icons__navbarBottom bg-bottom-bar-icon font-active'
            }
          >
            <AiFillHome />
          </span>
          <span
            /* to="/History" */
           onClick={() => viewNavigate('/History')}

           className={'icons__navbarBottom bg-bottom-bar-icon font-active'
          }
          >
            <RiBarChart2Fill />
          </span>
          <AiFillPlusCircle
            className="translateY bg-plus"
            onClick={mostrarMenu}
          />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'icons__navbarBottom bg-bottom-bar-icon font-active'
                : 'icons__navbarBottom font-inactive'
            }
          >
            <FaWallet />
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'icons__navbarBottom bg-bottom-bar-icon font-active'
                : 'icons__navbarBottom font-inactive'
            }
          >
            <HiUsers />
          </NavLink>
        </ul>
      </nav>
      <MenuTransactions showMenu={showMenu} mostrarMenu={mostrarMenu} />
    </>
  )
}

export { BottomBar }
