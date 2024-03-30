import { useState } from "react";
import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./MobileMainNav.module.css";
function MobileMainNav() {
  const [toggleNav, setToggleNav] = useState(false);

  function handleToggleNav() {
    setToggleNav(!toggleNav);
  }
  return (
    <React.Fragment>
      <div className="toggleNavButton" onClick={handleToggleNav}>
        {!toggleNav && (
          <span className="toggleNavButtonIconOpen">Open Menu</span>
        )}
        {toggleNav && (
          <span className="toggleNavButtonIconClose">Close Menu</span>
        )}
      </div>
      {toggleNav && (
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
      )}
    </React.Fragment>
  );
}

export default MobileMainNav;
