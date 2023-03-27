import React from "react";

interface Props {
  image: string;
  title: string;
  children?: JSX.Element;
}

const ModalSuccess = ({ image, children, title }: Props) => {
  return (
    <div className="container__modal--success">
      <figure className="container__modal--success--img">
        <img src={image} alt={title} className="img" />
      </figure>
      <p className="container__modal--text">{title}</p>
      {children}
    </div>
  );
};

export default ModalSuccess;
