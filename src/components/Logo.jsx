import React from "react";
import Images from "../images/Images";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <React.Fragment>
      <img
        className={`${styles.image} content-center`}
        src={Images.avatar}
        alt="Nikos Christomanos web developer"
        title="Nikos Christomanos web developer"
      />
    </React.Fragment>
  );
}

export default Logo;
