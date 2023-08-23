import './styles/navbarBottom.css'
import React from 'react'
import { useMatch } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useTransactions } from '../../hooks/useTransactions'
import { MenuTransactions } from '../transactions/MenuTransactions'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'
import { routes } from './data/routes'

const BottomBar: React.FC = () => {
  const { mostrarMenu, showMenu } = useTransactions()
  const { viewNavigate } = useViewTransition()

  return (
    <>
      <nav className="container__navbarBottom">
        <ul className="container__navbarBottom--icons">
          {routes?.map(({ id, path, icon }) => (
            id !== 3
              ? <li
              key={id}
              onClick={() => { viewNavigate(path) }}
              className={useMatch(path) !== null ? 'icons__navbarBottom bg-bottom-bar-icon font-active' : 'icons__navbarBottom font-inactive'}
            >
              {icon}
            </li>
              : <AiFillPlusCircle
           key={id}
            className="translateY bg-plus"
            onClick={mostrarMenu}
           />
          ))}
        </ul>
      </nav>
      <MenuTransactions showMenu={showMenu} mostrarMenu={mostrarMenu} />
    </>
  )
}

export { BottomBar }
