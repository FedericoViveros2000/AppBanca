import React from 'react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import { formatCurrency } from '../../utils/formatCurrency'
import './styles/spending.css'
interface Props {
  titleSpending?: string
  titleIncome?: string
  spending?: number
  income?: number
}

const Spending: React.FC<Props> = ({
  spending,
  income,
  titleSpending = 'Spending',
  titleIncome = 'Income'
}) => {
  return (
    <section className="flex">
      <article className="spending flex items-center">
        <span className="icon bg-spending-color">
          <BsArrowUp className="icon-spending" />
        </span>
        <div>
          <p className="font-grey fs-normal">{titleSpending}</p>
          <p className="fw-bold">{formatCurrency(spending)}</p>
        </div>
      </article>
      <article className="spending flex items-center">
        <span className="icon bg-income-color">
          <BsArrowDown className="icon-spending" />
        </span>
        <div>
          <p className="font-grey fs-normal">{titleIncome}</p>
          <p className="fw-bold">{formatCurrency(income)}</p>
        </div>
      </article>
    </section>
  )
}

export { Spending }
