import React from "react";
import logo from "../../../assets/icons/film.svg";
import "./logo.scss";

function Logo() {
  return (
    <div className="Logo mb-4">
      <img width="72" height="72" src={logo} alt="logo" />
      <h2>Fliek</h2>
    </div>
  );
}

export default Logo;
