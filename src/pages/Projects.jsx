import React, { useState } from "react";
import ProjectList from "../components/Projects/ProjectList";
import Title from "../components/Titles/Title";
import Images from "../images/Images";
import { useParams } from "react-router-dom";
import styles from "./Projects.module.css";
import Single from "../components/Projects/Single";
import { motion, AnimatePresence } from "framer-motion";
function Projects() {
  let { type } = useParams();
  const [infoOpen, setInfoOpen] = useState(false);
  function handleSetInfoOpen() {
    setInfoOpen(!infoOpen);
  }
  const projects = [
    {
      id: "thenps",
      title: "The North Point Sports",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris rutrum euismod nunc, quis dictum nisl iaculis et. Proin et ex rutrum ligula venenatis interdum.Morbi semper nibh ut enim semper imperdiet. Aliquam tincidunt luctus tortor, at posuere libero volutpat a. Sed ut hendrerit leo.Cras ullamcorper condimentum est, in finibus enim dapibus id. Quisque vel semper risus. Donec cursus ipsum sed lacinia dictum. Pellentesque et turpis dui",
      excerpt: "Eshop κατασκευασμένο με Opencart",
      category: "opencart",
      url: "https://the-nps.gr",
      image: Images.thenps,
    },
    {
      id: "doctorcannabis",
      title: "Doctor Cannabis",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris rutrum euismod nunc, quis dictum nisl iaculis et. Proin et ex rutrum ligula venenatis interdum.Morbi semper nibh ut enim semper imperdiet. Aliquam tincidunt luctus tortor, at posuere libero volutpat a. Sed ut hendrerit leo.Cras ullamcorper condimentum est, in finibus enim dapibus id. Quisque vel semper risus. Donec cursus ipsum sed lacinia dictum. Pellentesque et turpis dui",
      excerpt: "Eshop κατασκευασμένο με Opencart",
      category: "wordpress",
      url: "https://doctor-cannabis.gr",
      image: Images.doctorcannabis,
    },
  ];

  return (
    <div>
      <Title>Projects</Title>
      <div
        style={{
          width: "90%",
          height: "auto",
          position: "relative",
          margin: " 0 auto",
        }}
      >
        <ProjectList
          projects={projects}
          type={type}
          setInfoOpen={handleSetInfoOpen}
        />
        <React.Fragment>
          <AnimatePresence>
            {infoOpen === true && (
              <motion.div
                className={styles.projectinfobox}
                exit={{ width: 0, height: 0, scale: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Single
                  infoOpen={infoOpen}
                  setInfoOpen={handleSetInfoOpen}
                  projects={projects}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </React.Fragment>
      </div>
    </div>
  );
}

export default Projects;
