import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'

interface Props {
  title: string
  urlBack: string
}

const NavBar = ({ title, urlBack }: Props) => {
  const { viewNavigate } = useViewTransition()
  return (
    <section className="container__title">
      <span onClick={() => { viewNavigate(urlBack) }} className="link">
        <BiArrowBack className="arrow-back font-light" />
      </span>
      <h1 className="title">{title}</h1>
    </section>
  )
}

export default NavBar
