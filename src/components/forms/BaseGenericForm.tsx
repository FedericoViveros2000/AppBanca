import React from "react";
import NavBar from "../navigation/NavBar";
import "./styles/form.css";

interface Props {
  navTitle: string;
  urlBack: string;
  titleForm: string;
  subTitleForm: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
}

const BaseGenericForm = ({
  navTitle,
  urlBack,
  titleForm,
  subTitleForm,
  children,
  handleSubmit,
}: Props) => {
  return (
    <div className="container bg-principal">
      <NavBar title={navTitle} urlBack={urlBack} />
      <form className="container__form bg-light" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="fw-bold fs-normal-xl">{titleForm}</h2>
        <p>
          <span>{subTitleForm}</span>
        </p>
        {children}
      </form>
    </div>
  );
};

export default BaseGenericForm;
