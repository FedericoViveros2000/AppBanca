import React from 'react'

interface Keys {
  id: number
  number: number
}

interface Props {
  background: string
  keys: Keys[]
  handleClick: (value: number) => void
}

export const KeyBoard: React.FC<Props> = ({ keys, handleClick }) => {
  return (
    <ul className="bg-light place-center gap-0 radius-top-left radius-top-right grid grid-columns-3">
      {keys?.map((value) => (
        <li className="fs-normal-xl" key={value?.id} onClick={() => { handleClick(value.number) }}>
          {value.number}
        </li>
      ))}
    </ul>
  )
}
