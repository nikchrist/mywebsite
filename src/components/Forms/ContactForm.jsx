import React, { useRef, useReducer } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import Loader from "../Loader";
import SubmitMessage from "./SubmitMessage";
import RequiredField from "./RequiredField";
const initialState = {
  fullname: "",
  email: "",
  company: "",
  message: "",
  step: 1,
  isLoading: false,
  formsubmited: false,
  inputFullnameIsEmpty: true,
  inputEmailIsEmpty: true,
};
const reduce = (state, action) => {
  switch (action.type) {
    case "fullname":
      return {
        ...state,
        fullname: action.payload,
        inputFullnameIsEmpty:
          action.payload === "" ? initialState.inputFullnameIsEmpty : false,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
        inputEmailIsEmpty:
          action.payload === "" ? initialState.inputEmailIsEmpty : false,
      };
    case "company":
      return { ...state, company: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "increaseStep":
      return {
        ...state,
        step: state.step >= 5 ? initialState.step : state.step + 1,
      };
    case "decreaseStep":
      return {
        ...state,
        step: state.step <= 1 ? initialState.step : state.step - 1,
      };
    case "isLoading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: initialState.isLoading };
    case "formSubmited":
      return { ...state, formsubmited: true };
    default:
      throw new Error();
  }
};

function ContactForm() {
  const [state, dispatch] = useReducer(reduce, initialState);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_g4lsdqj", "template_jkxokuk", form.current, {
        publicKey: "MPbzkjy6FJ2Bie6sp",
      })
      .then(
        () => {
          console.log("SUCCESS");
          dispatch({ type: "stopLoading" });
          dispatch({ type: "formSubmited" });
        },
        (error) => console.log(error)
      );
  };
  return (
    <React.Fragment>
      <form
        id="ctnform"
        className={styles.ctnForm}
        ref={form}
        name="form"
        onSubmit={sendEmail}
      >
        <React.Fragment>
          <div
            className={` ${styles.formgridItem} ${
              state.step === 1 ? styles.show : styles.hide
            }`}
          >
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              BHMA1
            </span>
            <label htmlFor="fullname">Εισάγετε εδώ το Ονοματεπώνυμο σας</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              autoComplete="name"
              onChange={(e) =>
                dispatch({ type: "fullname", payload: e.target.value })
              }
              value={state.fullname}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: "increaseStep",
                  });
                }
                if (e.key === "Escape") {
                  dispatch({
                    type: "decreaseStep",
                  });
                }
              }}
            />
            {state.inputFullnameIsEmpty && <RequiredField />}
          </div>
          <div
            className={` ${styles.formgridItem}  ${
              state.step === initialState.step + 1 ? styles.show : styles.hide
            }`}
          >
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              BHMA 2
            </span>
            <label htmlFor="email">
              Εδώ μπορείτε να εισάγετε το επαγγελματικό ή και το προσωπικό σας
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
              value={state.email}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: "increaseStep",
                  });
                }

                if (e.key === "Escape") {
                  dispatch({
                    type: "decreaseStep",
                  });
                }
              }}
            />
            {state.inputEmailIsEmpty && <RequiredField />}
          </div>

          <div
            className={` ${styles.formgridItem}  ${
              state.step === initialState.step + 2 ? styles.show : styles.hide
            }`}
          >
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              BHMA 3
            </span>
            <div className={styles.formItemText}></div>
            <label htmlFor="company">
              Εάν επικοινωνείτε εκ μέρους κάποιας εταιρία παρακαλώ εισάγετε την
              επωνυμία της Εταιρίας στο παρακάτω πεδίο
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="company"
              onChange={(e) =>
                dispatch({ type: "company", payload: e.target.value })
              }
              value={state.company}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({
                    type: "increaseStep",
                  });
                }

                if (e.key === "Escape") {
                  dispatch({
                    type: "decreaseStep",
                  });
                }
              }}
            />
          </div>
          <div
            className={` ${styles.formgridItem}  ${
              state.step === initialState.step + 3 ? styles.show : styles.hide
            }`}
          >
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              BHMA 4
            </span>
            <label htmlFor="message">
              Παρακάτω μπορείτε να γράψετε το μήνυμα σας.Θα σας ακούσω με
              προσοχή και θα λάβετε άμεση απάντηση.
            </label>
            <textarea
              rows="20"
              cols="100"
              className={styles.textarea}
              id="message"
              name="message"
              onChange={(e) =>
                dispatch({ type: "message", payload: e.target.value })
              }
              value={state.message}
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  dispatch({
                    type: "decreaseStep",
                  });
                }
              }}
            />
          </div>
          <div
            className={` ${styles.formgridItem}  ${
              state.step === initialState.step + 4 ? styles.show : styles.hide
            }`}
          >
            <span
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              BHMA 5
            </span>
            <button
              type="button"
              id="submit"
              className={styles.submitbtn}
              name="submit"
              onClick={(e) => {
                dispatch({ type: "isLoading" });
                sendEmail(e);
              }}
            >
              ΑΠΟΣΤΟΛΗ
            </button>
          </div>
        </React.Fragment>
      </form>
      {state.isLoading && <Loader />}
      {!state.isLoading && state.formsubmited && <SubmitMessage />}
      <div className={styles.buttons}>
        <button
          className={`${
            (state.step === 1 && state.inputFullnameIsEmpty) ||
            (state.step === 2 && state.inputEmailIsEmpty)
              ? styles.disabled
              : ""
          } `}
          type="button"
          onClick={() => {
            dispatch({
              type: "increaseStep",
            });
          }}
        >
          ΕΠΟΜΕΝΟ ΒΗΜΑ
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch({
              type: "decreaseStep",
            });
          }}
        >
          ΠΡΟΗΓΟΥΜΕΝΟ ΒΗΜΑ
        </button>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
