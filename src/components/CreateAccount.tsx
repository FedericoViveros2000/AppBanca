import React from 'react'
import { Link } from 'react-router-dom'
import { type AppState } from '../interfaces/userInterface'
import { InputTextSearch } from './forms/inputs/InputTextSearch'
import { ButtonPrimary } from './buttons/ButtonPrimary'
import { InputEmail } from './forms/inputs/InputEmail'
import { InputDate } from './forms/inputs/InputDate'
import { InputPassword } from './forms/inputs/InputPassword'

interface Props {
  newUser: AppState['createAccount']
  handleCreateAccount: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleIsAccept: () => void
  error: string
}

const CreateAccount: React.FC<Props> = ({
  handleCreateAccount,
  handleIsAccept,
  newUser,
  error
}: Props) => {
  return (
    <>
      <div className="container__create">
        <label htmlFor="user" className="label__login">
          Name
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="name"
            name="nombre"
            placeholder="Enter your name"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="lastName" className="label__login">
          Last name
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="lastName"
            name="apellido"
            placeholder="Enter your last name"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="email" className="label__login">
          Email
        </label>
        <div className="container__messages my-1">
          <InputEmail
            id="email"
            name="email"
            placeholder="Enter your email"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="nro_documento" className="label__login">
          Nro Documento
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="nro_documento"
            name="nro_documento"
            placeholder="Enter your document ID"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="phone" className="label__login">
          Phone:
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="phone"
            name="telefono"
            placeholder="Enter your telephone"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="address" className="label__login">
          Address:
        </label>
        <div className="container__messages my-1">
          <InputTextSearch
            id="address"
            name="direccion"
            placeholder="Enter your telephone"
            handleChange={handleCreateAccount}
          />
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        </div>
        <label htmlFor="birthday" className="label__login">
          Birthday:
        </label>
        <div className="container__messages my-1">
          <InputDate
            id="birthday"
            name="fecha_nacimiento"
            placeholder="Enter your birthday"
            handleChange={handleCreateAccount}
          />
        </div>
        <label htmlFor="password" className="label__login">
          Password:
        </label>
        <div className="container__messages my-1">
          <InputPassword
            id="password"
            placeholder="Enter your password"
            handleChange={handleCreateAccount}
            handleChangeTypeInput={() => {}}
          />
        </div>
        <label htmlFor="accept" className="container__accept">
          <input
            type="checkbox"
            id="accept"
            name="accept"
            onChange={handleIsAccept}
          />
          <span className="terms">
            By creating an account, you agree to our
          </span>
        </label>
        {/* {error && <p>{error}</p>} */}
        <p>
          <Link to="/" className="font-terms">
            Terms and conditions
          </Link>
        </p>
      </div>
      <ButtonPrimary isFetching={false} />
    </>
  )
}

export default CreateAccount
