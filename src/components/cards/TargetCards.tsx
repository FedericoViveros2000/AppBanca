import './styles/card.css'
import React from 'react'
import { useGetCards } from '../../hooks/useGetCards'
import TargetCardLoader from './TargetCardLoader'
import { type Cards } from '../../interfaces/cards'
import { formatCurrency } from '../../utils/formatCurrency'
import { useRealtime } from '../../hooks/useRealtime'
import { TABLES } from '../../interfaces/enums/database/tables'

interface Data {
  data: Cards[]
  isLoading: boolean
}

interface Props {
  idCustomer: number
}

export const TargetCards: React.FC<Props> = ({ idCustomer }) => {
  const { cardBalance, idCardCustomer } = useRealtime({
    table: TABLES.CARD_BALANCE
  })

  const { isLoading, data }: Data = useGetCards({
    idCustomer,
    newBalance: cardBalance,
    idCardCustomer
  })

  if (isLoading) return <TargetCardLoader />

  return (
    <>
      {data?.map((card) => (
        <li
          style={{
            backgroundColor: card.card_color ?? 'blueviolet'
          }}
          className={`container__target--card relative target font-light ${
            data.length === 1 ? 'min-w-100' : 'min-w-90'
          }`}
          key={card.id}
        >
          <div className="flex space-between items-center">
            <p className="font-light">{card.card_title}</p>
            <p className="font-light">{card.card_supplier}</p>
          </div>
          <div className="container__target--balance">
            <p className="title-balance font-light fw-normal">Balance</p>
            <h2 className="font-regular-title-large font-light fw-normal">
              {formatCurrency(card?.card_balance)}
            </h2>
          </div>
        </li>
      ))}
    </>
  )
}
