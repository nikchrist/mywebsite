import styles from "./Skills.module.css";
function Skills({ children }) {
  return (
    <div className={styles.skillWrapper}>
      <ul className={styles.skillList}>{children}</ul>
    </div>
  );
}

export default Skills;
