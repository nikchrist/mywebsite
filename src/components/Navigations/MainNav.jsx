import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
export default function MainNav() {
  return (
    <React.Fragment>
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
