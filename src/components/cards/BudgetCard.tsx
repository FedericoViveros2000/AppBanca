import React from 'react'
import './styles/budget.css'

interface Props {
  // children?: JSX.Element;
  bgColor: string
}

export const BudgetCard: React.FC<Props> = ({ bgColor }) => {
  return (
    <>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
      <li className={`container__target--budget target ${bgColor}`}></li>
    </>
  )
}
