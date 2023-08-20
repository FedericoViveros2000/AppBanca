import './styles/MenuTransactions.css'
import { ROUTE } from '../../router/router.d.ts'
import React from 'react'
import { useViewTransition } from '../../hooks/viewTransitions/useViewTransition'
interface Props {
  showMenu: string
  mostrarMenu: () => void
}
const MenuTransactions: React.FC<Props> = ({ showMenu, mostrarMenu }) => {
  const { viewNavigate } = useViewTransition()
  return (
    <div className={`menu-transactions ${showMenu}`}>
      <article className={`menu-transaction ${showMenu}`}>
        <div className="flex items-center space-between mb-1">
          <h3 className="font-blue fw-bold fs-normal-md">Add Transaction</h3>
          <p onClick={mostrarMenu} className="font-active fw-bold">
            Close
          </p>
        </div>
        <ul className="grid">
          <li className="item-menu bg-light-grey" onClick={() => { viewNavigate(ROUTE.SENDMONEY) }}>
            Enviar dinero
          </li>
          <li className="item-menu bg-light-grey"></li>
          <li className="item-menu bg-light-grey"></li>
          <li className="item-menu bg-light-grey"></li>
        </ul>
      </article>
    </div>
  )
}

export { MenuTransactions }
