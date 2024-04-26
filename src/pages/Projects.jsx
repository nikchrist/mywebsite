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
    {
      id: "virsa",
      title: "Virsa - Handmade bags & Accessories",
      content:
        "Η «Βύρσα» είναι ένα εργαστήριο δερμάτινων ειδών (Est. 1983) που δραστηριοποιείται στο χώρο της παραγωγής τσαντών, σύμφωνα με τις σύγχρονες επιταγές της μόδας, άνεσης και ποιότητας.Ηλεκτρονικό κατάστημα κατασκευασμένο με Wordress + Woocommerce",
      excerpt: "Ιστοσελίδα κατασκευασμένη με Wordpress + Woocommerce",
      category: "wordpress",
      url: "https://virsa.gr/",
      image: Images.virsa,
    },
    {
      id: "pokedex",
      title: "My Pokedex",
      content:
        "Ένα από τα πρώτα μου project κατασκευασμένο με την React βιβλιοθήκη της javascript.Τα δεδομένα αντλούνται από τον ιστότοπο https://pokeapi.co/",
      excerpt: "Ιστοσελίδα κατασκευασμένη με React Js",
      category: "react",
      url: "https://nikpokemons.netlify.app/",
      image: Images.pokedex,
    },
    {
      id: "arcobaleno",
      title: "Arco Baleno",
      content:
        "Το  ARCO-BALENO είναι κατάσημα ρούχων που βρίσκεται στις Σέρρες.Το ηλεκτρονικό κατάστημα δημιουργήθηκ με το πρόσθετο Woocommerce του Wordpress CMS(Content Managment System)",
      excerpt:
        "Eshop κατασκευασμένο με  το Wooocommerce πρόθετο του Wordpress CMS",
      category: "wordpress",
      url: "https://arco-baleno.gr/",
      image: Images.arcobaleno,
    },
    {
      id: "atlasgroup",
      title: "Atlas Group",
      content:
        "Η Atlas Group δραστηριοποιείται στον χώρο των τροφίμων με υψηλή εξειδίκευση στο ελαιόλαδο, στο ηλιέλαιο,τη ζάχαρη,το αλεύρι και τη βρώσιμη ελιά.",
      excerpt: "Ιστοσελίδα κατασκευασμένη με  το Wordpress CMS",
      category: "wordpress",
      url: "https://atlasgroup.gr/",
      image: Images.atlasgroup,
    },
    {
      id: "mecon",
      title: "ME-CON",
      content:
        "Εταιρία που ασχολείτε με την θέρμανση, τις ανακαινίσεις και τα φωτοβολταϊκά",
      excerpt: "Ιστοσελίδα κατασκευασμένη με  το Wordpress CMS",
      category: "wordpress",
      url: "https://me-con.gr/",
      image: Images.mecon,
    },
    {
      id: "nektarmeteoron",
      title: "Nektar Meteoron",
      content: "Εταιρία παραγωγής και πώλησης προϊόντων από μέλι",
      excerpt:
        "Eshop κατασκευασμένο με  το Wooocommerce πρόθετο του Wordpress CMS",
      category: "wordpress",
      url: "https://nektarmeteoron.gr/",
      image: Images.nektarmeteoron,
    },
    {
      id: "perfectwedding",
      title: "Perfect Wedding",
      content: "Κατάστημα πώλησης προϊ'οντων γάμου αλλά και βαφτίσεων",
      excerpt:
        "Eshop κατασκευασμένο με  το Wooocommerce πρόθετο του Wordpress CMS",
      category: "wordpress",
      url: "https://perfectwedding.gr/",
      image: Images.perfectwedding,
    },
  ];

  return (
    <div>
      <Title>Projects</Title>
      <div className={styles.projectsPageWrapper}>
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
