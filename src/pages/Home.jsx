import React from "react";
import styles from "./Home.module.css";
import Skill from "../components/Skills/Skill";
import Skills from "../components/Skills/Skills";
import Title from "../components/Titles/Title";
import Subtitle from "../components/Titles/Subtitle";
function Home() {
  return (
    <React.Fragment>
      <div className={styles.home}>
        <Title>Nikos Christomanos</Title>
        <Subtitle style={{ textTransform: "capitalize" }}>
          Web Developer
        </Subtitle>
        <section className={styles.shortbio}>
          <p>
            <span className={styles.homspan}>
              10+ χρόνια εμπειρίας στην ανάπτυξη και σχεδιασμό ιστότοπων, με
              έμφαση
            </span>
            <span className={styles.homspan}>
              στο ηλεκτρονικό εμπόριο και την διαδικτυακή προβολή
            </span>
            <span className={styles.homspan}>
              επιχειρήσεων.Εργατικός με ομαδικό πνεύμα και όρεξη για μάθηση νέων
            </span>
            <span className={styles.homspan}>
              τεχνολογιών.Πρόσφατα ξεκίνησε να ασχολείται με Headless
              CMS(Wordpress + Gatsby) και Laravel
            </span>
          </p>
        </section>
        <section className={styles.skills}>
          <div className={styles.pagetitlesWrapper}>
            <h2 id="titlelem" style={{ fontFamily: "Cormorant" }}>
              Skills
            </h2>
          </div>
          <div className={styles.skillsWrapper}>
            <Skills>
              <Skill type={"html"} progress={90} />
              <Skill type={"css"} progress={90} />
              <Skill type={"php"} progress={70} />
              <Skill type={"javascript"} progress={50} />
              <Skill type={"react"} progress={50} />
              <Skill type={"mysql"} progress={70} />
              <Skill type={"wordpress"} progress={90} />
              <Skill type={"opencart"} progress={60} />
            </Skills>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default Home;
