import React from 'react'
import { StorieItem } from './StorieItem'
interface Props {
  title: string
}
export const Stories: React.FC<Props> = ({ title }) => {
  return (
    <>
      <h2 className="my-1 font-blue fw-bold fs-normal-md">{title}</h2>
      <ul className="overflow-x-auto scroll-none flex">
        <StorieItem />
      </ul>
    </>
  )
}
