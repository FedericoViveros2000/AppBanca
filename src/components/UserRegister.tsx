import React from "react";
import { useForm } from "../hooks/useForm";

const validationForm = () => {
  console.log("Sin errores");
};

const UserRegister = () => {
  let { handleChange, handleSubmit, errors } = useForm(validationForm);

  return (
    <div className="h-screen p-3 flex flex-col justify-between">
      <form className="overflow-y-auto">
        <h2 className="text-center text-2xl my-4">Registrar Usuario</h2>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="input"
          placeholder="Introduzca el nombre del usuario"
          onClick={() => handleChange}
        />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          className="input"
          placeholder="Introduzca el apellido del usuario"
          onClick={() => handleChange}
        />
        <label htmlFor="nro_documento">Nro Documento:</label>
        <input
          type="number"
          id="nro_documento"
          name="nro_documento"
          className="input"
          placeholder="Introduzca el numero de documento del usuario"
          onClick={() => handleChange}
        />
        <label htmlFor="email">Correo Electronico:</label>
        <input
          type="mail"
          id="email"
          name="email"
          className="input"
          placeholder="Introduzca el numero de documento del usuario"
          onClick={() => handleChange}
        />
        <label htmlFor="telefono">Telefono:</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          className="input"
          placeholder="Introduzca el numero de documento del usuario"
          onClick={() => handleChange}
        />
        <label htmlFor="direccion">Direccion:</label>
        <input
          type="text"
          id="direccion"
          name="direccion"
          className="input"
          placeholder="Introduzca el numero de documento del usuario"
          onClick={() => handleChange}
        />
      </form>
      <button
        className="block text-center btn btn-primary"
        onClick={handleSubmit}
      >
        Registrar
      </button>
    </div>
  );
};

export default UserRegister;
