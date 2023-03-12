import React from "react";
import NavBar from "./NavBar";

interface Props {
  navTitle: string;
  urlBack: string;
  titleForm: string;
  subTitleForm: string;
  handleSubmit: () => {};
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
    <div className="container">
      <NavBar title={navTitle} urlBack={urlBack} />
      <form className="container__form" onSubmit={handleSubmit}>
        <div>
          <h2 className="title title__normal">{titleForm}</h2>
          <p>
            <span>{subTitleForm}</span>
          </p>
        </div>
        {children}
      </form>
    </div>
  );
};

export default BaseGenericForm;
