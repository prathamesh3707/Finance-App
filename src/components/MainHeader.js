import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <h1 className={classes.logo}>Finance App</h1>

          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/chapters">
              chapters
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/market">
              market
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/accounts">
              accounts
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
