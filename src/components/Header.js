import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div id="mainHeader">
      <figure className="Logo">
        <img src="./LogoCookingnoBg.png" alt="Logo marmitte et partage" />
      </figure>
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/favorites"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>
            Mes favoris <i className="fa-solid fa-heart"></i>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
