import React, { useState, useEffect } from 'react'
import './styles/navbarUser.css'
import { AiFillBell } from 'react-icons/ai'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'
import { ROUTE } from '../../router/router.d.ts'

interface Props {
  name: string
}

const NavBarDetailUser: React.FC<Props> = ({ name }) => {
  const [greeting, setGreeting] = useState('')

  const { viewNavigate } = useViewTransition()
  useEffect(() => {
    const currentHour = new Date().getHours()
    if (currentHour >= 6 && currentHour < 12) {
      setGreeting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon')
    } else if (currentHour > 18 && currentHour < 21) {
      setGreeting('Good Evening')
    } else {
      setGreeting('Good Night')
    }
  }, [])

  return (
    <header className="container__header bg-top-bar">
      <ul className="container__header--info">
        <li>
          <span className="font-regular fw-thin font-grey">{greeting}</span>
          <p className="fw-bold font-regular-text-bold font-name">{name}</p>
        </li>
        <li className="container__header--notification">
          <p className="icons">
            <AiFillBell />
          </p>
          <figure
            className="img-user"
            onClick={() => { viewNavigate(ROUTE.CONFIGURATION) }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEbRQ__k2EYW6KuKOGDuoftyTVDlxJ_lFv8lzXrNixMg&s"
              alt=""
            />
          </figure>
        </li>
      </ul>
    </header>
  )
}

export { NavBarDetailUser }
