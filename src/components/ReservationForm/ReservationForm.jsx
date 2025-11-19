// Styles
import Css from "./ReservationForm.module.css";

// Modules
import { Formik, Form, Field } from "formik";

const ReservationForm = () => {
  return (
    <div className={Css.FormContainer}>
      <h3 className={Css.FormTitle}>Book your campervan now</h3>
      <p className={Css.FormDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
      >
        <Form className={Css.Form}>
          <Field
            className={Css.InputField}
            name="name"
            placeholder="Name*"
            required
          />
          <Field
            className={Css.InputField}
            name="email"
            type="email"
            placeholder="Email*"
            required
          />
          <Field
            className={Css.InputField}
            name="date"
            type="date"
            placeholder="Booking Date*"
            required
          />
          <Field
            as="textarea"
            name="comment"
            className={Css.InputField}
            placeholder="Comment"
          />
          <button type="submit" className={Css.SubmitButton}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReservationForm;
