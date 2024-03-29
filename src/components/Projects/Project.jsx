import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
function Project({ project, setInfoOpen }) {
  const navigate = useNavigate();
  const titlevariantsInitial = {
    opacity: 0,
    top: 50,
  };
  const titlevariantsInView = {
    position: "relative",
    opacity: 1,
    top: 0,
  };
  const descvariantsInitial = {
    opacity: 0,
    bottom: 50,
  };

  const descvariantsInView = {
    position: "relative",
    opacity: 1,
    bottom: 0,
  };
  const showmorebrnvarsInitial = {
    opacity: 0,
    position: "absolute",
    top: 50,
    left: -20,
    padding: "0 0",
    fontSize: 20,
    textDecoration: "none",
    borderRadius: "50%",
    background: "rgb(0, 66, 128)",
    boxShadow: "0px 0px 0px #000",
  };
  const showmorebrnvarsInView = {
    opacity: 1,
    position: "absolute",
    top: 50,
    left: -20,
    padding: "30 10",
    fontSize: 20,
    textDecoration: "none",
    borderRadius: 50 + "%",
    boxShadow: "1px 1px 20px #000",
  };
  return (
    <React.Fragment>
      <motion.h2
        initial={titlevariantsInitial}
        whileInView={titlevariantsInView}
        transition={{ duration: 0.7, delay: 1 }}
        viewport={{ once: true }}
      >
        {project.title}
      </motion.h2>
      <motion.div
        className={styles.projectImage}
        initial={{ opacity: 0, scale: 0.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={project.image}
          alt={project.title}
          title={project.title}
          width="100%"
        />
      </motion.div>
      <motion.div
        className={styles.projectExcerpt}
        initial={descvariantsInitial}
        whileInView={descvariantsInView}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        {project.excerpt}
      </motion.div>
      <div
        initial={showmorebrnvarsInitial}
        whileInView={showmorebrnvarsInView}
        transition={{ duration: 1, delay: 2 }}
        viewport={{ once: true }}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("project/" + project.id);
            setInfoOpen();
          }}
          className={styles.projectarchivebtn}
        >
          SHOW MORE
        </button>
      </div>
    </React.Fragment>
  );
}

export default Project;
