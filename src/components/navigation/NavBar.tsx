import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'

interface Props {
  title: string
  urlBack: string
  color?: string
}

const NavBar: React.FC<Props> = ({ title, urlBack, color }) => {
  const { viewNavigate } = useViewTransition()
  return (
    <section className="container__title">
      <span
        onClick={() => {
          viewNavigate(urlBack)
        }}
        className="link"
      >
        <BiArrowBack className="arrow-back font-light" />
      </span>
      <h1 className={color} >{title}</h1>
    </section>
  )
}

export default NavBar
