import React from 'react'
import { Link } from 'react-router-dom'
import { type AppState } from '../interfaces/userInterface'
import { InputTextSearch } from './forms/inputs/InputTextSearch'
import { ButtonPrimary } from './buttons/ButtonPrimary'
import { InputEmail } from './forms/inputs/InputEmail'
import { InputDate } from './forms/inputs/InputDate'
import { InputPassword } from './forms/inputs/InputPassword'
import { type UserRegisterValidations } from './validations/types/validationRegister'
import { Error } from './errors/Error'

interface Props {
  newUser: AppState['createAccount']
  handleCreateAccount: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleIsAccept: () => void
  error: UserRegisterValidations
}

const CreateAccount: React.FC<Props> = ({
  handleCreateAccount,
  handleIsAccept,
  newUser,
  error
}: Props) => {
  return (
    <div className="container__create">
      <label htmlFor="user" className="label">
        Name
      </label>
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="name"
          name="nombre"
          placeholder="Enter your name"
          handleChange={handleCreateAccount}
        />
        {error.nombre === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.nombre !== undefined && <Error message={error.nombre} />}
      <label htmlFor="lastName" className="label">
        Last name
      </label>
      {/* {typeof (error.apellido)?.toString()} */}
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="lastName"
          name="apellido"
          placeholder="Enter your last name"
          handleChange={handleCreateAccount}
        />
        {error.apellido === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.apellido !== undefined && <Error message={error.apellido} />}
      <label htmlFor="email" className="label">
        Email
      </label>
      <div className="container__messages my-sm-1">
        <InputEmail
          id="email"
          name="email"
          placeholder="Enter your email"
          handleChange={handleCreateAccount}
        />
        {error.email === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.email !== undefined && <Error message={error.email} />}
      <label htmlFor="nro_documento" className="label">
        Nro Documento
      </label>
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="nro_documento"
          name="nro_documento"
          placeholder="Enter your document ID"
          handleChange={handleCreateAccount}
        />
        {error.nro_documento === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.nro_documento !== undefined && (
        <Error message={error.nro_documento} />
      )}
      <label htmlFor="phone" className="label">
        Phone:
      </label>
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="phone"
          name="telefono"
          placeholder="Enter your telephone"
          handleChange={handleCreateAccount}
        />
        {error.telefono === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.telefono !== undefined && <Error message={error.telefono} />}
      <label htmlFor="address" className="label">
        Address:
      </label>
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="address"
          name="direccion"
          placeholder="Enter your telephone"
          handleChange={handleCreateAccount}
        />
        {error.direccion === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      {error.direccion !== undefined && <Error message={error.direccion} />}
      <label htmlFor="birthday" className="label">
        Birthday:
      </label>
      <div className="container__messages my-sm-1">
        <InputDate
          id="birthday"
          name="fecha_nacimiento"
          placeholder="Enter your birthday"
          handleChange={handleCreateAccount}
        />
        {/* {error.fecha_nacimiento === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )} */}
      </div>
      {error.fecha_nacimiento !== undefined && (
        <Error message={error.fecha_nacimiento} />
      )}
      <label htmlFor="password" className="label">
        Password:
      </label>
      <div className="container__messages my-sm-1">
        <InputPassword
          id="password"
          placeholder="Enter your password"
          handleChange={handleCreateAccount}
          handleChangeTypeInput={() => {}}
        />
        {/* {error.password === undefined && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )} */}
      </div>
      {error.password !== undefined && <Error message={error.password} />}
      <label htmlFor="accept" className="container__accept">
        <input
          type="checkbox"
          id="accept"
          name="accept"
          onChange={handleIsAccept}
        />
        <span className="terms">By creating an account, you agree to our</span>
      </label>
      {/* {error && <p>{error}</p>} */}
      <p className="my-1">
        <Link to="/" className="font-terms">
          Terms and conditions
        </Link>
      </p>
      <ButtonPrimary isFetching={false} />
    </div>
  )
}

export default CreateAccount
