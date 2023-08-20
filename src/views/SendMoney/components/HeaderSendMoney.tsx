import './styles/HeaderSendMoney.css'
import React from 'react'
import { InputTextSearch } from '../../../components/forms/inputs/InputTextSearch'
interface Header {
  title?: string
  action?: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const HeaderSendMoney: React.FC<Header> = ({ title, action, handleSearch }) => {
  return (
    <header className="container__padding container__header--transfer">
      <nav className="flex pt-1 space-between  items-center ">
        <h1 className="font-light fs-normal-md">{title}</h1>
        <p className="font-light fw-normal">{action}</p>
      </nav>
      <InputTextSearch
        id="search"
        type="search"
        name='search'
        handleChange={handleSearch}
        placeholder="Enter a name or email"
        className="bg-principal-dark p-1 my-1 font-light"
      />
    </header>
  )
}

export { HeaderSendMoney }
