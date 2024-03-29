import { NavLink } from "react-router-dom";
import React from "react";
function Footer() {
  return (
    <React.Fragment>
      <footer style={{ marginTop: "10vh" }}>
        <p style={{ color: "#fff" }}>
          <span style={{ marginRight: "5px" }}>&copy; Copyright</span>
          <NavLink to="/" style={{ color: "#A8C6DE" }}>
            Nikos Christomanos
          </NavLink>
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
