import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  urlBack: string;
}

const NavBar = ({ title, urlBack }: Props) => {
  return (
    <section className="container__title">
      <Link to={urlBack} className="link">
        <BiArrowBack className="arrow-back font-light" />
      </Link>
      <h1 className="title section__separator">{title}</h1>
    </section>
  );
};

export default NavBar;
