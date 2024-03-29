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
        "Η εταιρεία North Point Sports δραστηριοποιείται στον χώρο της επαγγελματικής ένδυσης και υπόδησης από το 2007, εισάγοντας και διανέμοντας στην Ελληνική αγορά μέσα ατομικής προστασίας, όπως υποδήματα και γάντια εργασίας, από επιλεγμένους Ευρωπαίους προμηθευτές.Το ηλεκτρονικό κατάστημα είναι κατασκευασμένο με το CMS(Content Management System) Opencart.Είναι ένα από τα πρώτα μου projects στο Opencart",
      excerpt: "Eshop κατασκευασμένο με Opencart",
      category: "opencart",
      url: "https://the-nps.gr",
      image: Images.thenps,
    },
    {
      id: "doctorcannabis",
      title: "Doctor Cannabis",
      content:
        "H NEOHEMP με έδρα την Θεσσαλονίκη δραστηριοποιείται στον κλάδο της καλλιέργειας επεξεργασίας και μεταποίησης βιομηχανικής κάνναβης.Ιστοσελίδα κατασκευασμένη με το CMS WORDPRESS.",
      excerpt: "Eshop κατασκευασμένο με Wordpress",
      category: "wordpress",
      url: "https://doctor-cannabis.gr",
      image: Images.doctorcannabis,
    },
    {
      id: "hellenicsubmarinersassociation",
      title: "Ελληνικός Σύλλογος Υποβρυχίων",
      content:
        "Σκοπός του Συνδέσμου είναι η διατήρηση και η ακόμη περισσότερο σύσφιξη των σχέσεων και δεσμών μεταξύ των πτυχιούχων της Σχολής Υποβρυχίων του ΠΝ που ευρίσκονται σε αποστρατεία ή σε ενέργεια και η διάδοση του πνεύματος αλληλεγγύης μεταξύ των μελών, η παροχή κάθε ηθικής υποστήριξης στα μέλη και η ανάταση του πνευματικού και πολιτιστικού επιπέδου.Ιστοσελίδα κατασκευασμένη με το CMS WORDPRESS.",
      excerpt: "Ιστοσελίδα κατασκευασμένη με Wordpress",
      category: "wordpress",
      url: "https://hellenicsubmarinersassociation.gr/",
      image: Images.hellenicsubmarinersassociation,
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
