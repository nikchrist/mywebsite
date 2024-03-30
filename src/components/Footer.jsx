import { NavLink } from "react-router-dom";
import React from "react";
function Footer({ backColor, margTop }) {
  return (
    <React.Fragment>
      <footer
        style={{
          marginTop: margTop ? margTop : "10vh",
          backgroundColor: backColor ? backColor : "",
        }}
      >
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
