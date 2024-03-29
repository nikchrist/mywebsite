import ContactForm from "../components/Forms/ContactForm";
import Title from "../components/Titles/Title";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <div>
      <Title>Contact Me</Title>
      <div className={styles.ctnsubtitle}>
        Ακολουθήστε τα παρακάτω βήματα για να επικοινωνήσετε μαζί μου.Θα χαρώ
        πολύ να σας ακούσω.
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
