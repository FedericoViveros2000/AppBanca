import React from 'react'
import { AiFillBell } from 'react-icons/ai'
export const NavBarDetailSkeleton: React.FC = () => {
  return (
    <header className="container__header bg-top-bar">
      <ul className="container__header--info">
        <li className="w-full">
          <div className="fs-normal-sm radius-sm font-grey  block skeleton mr-1">
            Cargando
          </div>
          <p className="fs-normal-sm radius-sm font-grey  block skeleton mr-1">
            Cargando
          </p>
        </li>
        <li className="container__header--notification">
          <p className="icons">
            <AiFillBell />
          </p>
          <figure className="img-user block bg-principal">
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
