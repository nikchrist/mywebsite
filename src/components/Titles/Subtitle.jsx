import styles from "./Subtitle.module.css";
function Subtitle({ children }) {
  return (
    <div className="pagetitles-wrapper text-center">
      <h2 className={styles.subtitle}>{children}</h2>
    </div>
  );
}

export default Subtitle;
