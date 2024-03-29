import React, { useState } from "react";
import Project from "./Project";
import styles from "./ProjectList.module.css";
import ProjectsFilterNav from "./ProjectsFilterNav";
import { motion } from "framer-motion";
function ProjectList({ projects, type, setInfoOpen }) {
  const [currentPrjCat, setCurrentPrjCat] = useState("");
  function handleSetCurrentPrjCat(catid) {
    setCurrentPrjCat(catid);
  }
  function filteredProjects() {
    return projects.filter((project) => currentPrjCat === project.category);
  }
  return (
    <React.Fragment>
      <ProjectsFilterNav
        currentPrjCat={currentPrjCat}
        setCurrentPrjCat={handleSetCurrentPrjCat}
        type={type}
      />
      <div className={styles.projectsWrapper}>
        <React.Fragment>
          {currentPrjCat === "" &&
            projects.map((project, index) => {
              return (
                <React.Fragment key={project.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    key={project.id}
                    className={styles.projectWrapper}
                  >
                    <Project
                      project={project}
                      type={type}
                      setInfoOpen={setInfoOpen}
                    />
                  </motion.div>
                </React.Fragment>
              );
            })}
          {currentPrjCat !== "" &&
            filteredProjects().map((project, index) => {
              return (
                <React.Fragment key={project.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    key={project.id}
                    className={styles.projectWrapper}
                  >
                    <Project
                      project={project}
                      type={type}
                      setInfoOpen={setInfoOpen}
                    />
                  </motion.div>
                </React.Fragment>
              );
            })}
        </React.Fragment>
      </div>
    </React.Fragment>
  );
}

export default ProjectList;
