import styles from "./RequiredField.module.css";
function RequiredField() {
  return (
    <div className={styles.requiredtext}>
      <p>Πρέπει να συμπληρώσετε το πεδίο για να προχωρήσετε στο επόμενο βήμα</p>
    </div>
  );
}

export default RequiredField;
