import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push("/");
  };
  return (
    <nav>
      <div className="nav-wrapper black p">
        <span href="/create" className="brand-logo">
          Shorten your link
        </span>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/links">Links</NavLink>
          </li>
          <li>
            <a href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
