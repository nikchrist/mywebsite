import React, { useState, useEffect } from "react";
import styles from "./Skill.module.css";
function Skill({ type, progress }) {
  const [timer, setTimer] = useState(10);
  const [skillbarwidth, setSkillBarWidth] = useState(10);
  useEffect(
    function () {
      const id = setInterval(function () {
        setTimer((timer) => (timer < progress ? timer + 1 : progress));
        setSkillBarWidth((skillbarwidth) =>
          skillbarwidth < progress ? skillbarwidth + 1 : progress
        );
      }, 10);
      return () => clearInterval(id);
    },
    [progress]
  );
  return (
    <li
      style={{ width: skillbarwidth + "%" }}
      className={` ${styles.skill} ${styles[`${type}`]}`}
    >
      <span className={styles.skilltitle}>
        {type} - {timer} %
      </span>
    </li>
  );
}

export default Skill;
