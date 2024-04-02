import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "./Single.module.css";
function Single({ projects, setInfoOpen }) {
  let { name } = useParams();
  const filteredProject = projects.filter((project) => project.id === name)[0];
  const { title, image, content, url } = filteredProject;
  return (
    <React.Fragment>
      <div className={styles.singleWrapper}>
        <span
          className={styles.closeSingleBtn}
          onClick={(e) => {
            e.preventDefault();
            setInfoOpen();
          }}
        >
          &#x2715;
        </span>
        <div className={styles.singleTitle}>{title}</div>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.singlecontentWrapper}>
          <div className={styles.singlecontent}>{content}</div>
        </div>
        <div className={styles.gotoproject}>
          <NavLink to={url}>GO TO {title}</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Single;
