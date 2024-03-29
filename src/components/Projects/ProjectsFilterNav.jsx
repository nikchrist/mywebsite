import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProjectsFilterNav.module.css";
function ProjectsFilterNav({ setCurrentPrjCat, currentPrjCat, type }) {
  const navigate = useNavigate();
  return (
    <div className={styles.projectsFilterNavWrapper}>
      <div>
        <button
          className={`${styles.btnFilterNav} ${
            currentPrjCat === "" ? styles.active : ""
          }`}
          onClick={() => {
            setCurrentPrjCat("");
            navigate("/projects/");
          }}
        >
          ALL
        </button>
        <button
          className={`${styles.btnFilterNav} ${
            currentPrjCat === "wordpress" && type === "wordpress"
              ? styles.active
              : ""
          }`}
          id="wordpress"
          onClick={(e) => {
            setCurrentPrjCat(e.target.id);
            navigate("/projects/" + e.target.id);
          }}
        >
          WORDPRESS
        </button>
        <button
          className={`${styles.btnFilterNav} ${
            currentPrjCat === "opencart" && type === "opencart"
              ? styles.active
              : ""
          }`}
          id="opencart"
          onClick={(e) => {
            setCurrentPrjCat(e.target.id);
            navigate("/projects/" + e.target.id);
          }}
        >
          Opencart
        </button>
      </div>
    </div>
  );
}

export default ProjectsFilterNav;
