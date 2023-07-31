import React from "react";
import { Link } from "react-router-dom";
import { type AppState } from "../interfaces/userInterface";
import { InputTextSearch } from "./forms/inputs/InputTextSearch";
import { ButtonPrimary } from "./buttons/ButtonPrimary";
import { InputEmail } from "./forms/inputs/InputEmail";
import { InputDate } from "./forms/inputs/InputDate";
import { InputPassword } from "./forms/inputs/InputPassword";

interface Props {
  newUser: AppState["createAccount"];
  handleCreateAccount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleIsAccept: () => void;
  error: string;
}

const CreateAccount: React.FC<Props> = ({
  handleCreateAccount,
  handleIsAccept,
  newUser,
  error,
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
        {newUser?.nombre.length > 3 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
      <label htmlFor="lastName" className="label">
        Last name
      </label>
      <div className="container__messages my-sm-1">
        <InputTextSearch
          id="lastName"
          name="apellido"
          placeholder="Enter your last name"
          handleChange={handleCreateAccount}
        />
          {newUser?.apellido.length > 3 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
        {newUser.email.length > 3 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
        {newUser.nro_documento > 10000 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
        {newUser.telefono.length > 3 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
        {newUser.direccion.length > 3 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
      </div>
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
        {newUser.password.length > 6 && (
          <p className="btn-check">
            <i className="fa-solid fa-check" />
          </p>
        )}
      </div>
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
  );
};

export default CreateAccount;
