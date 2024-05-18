import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./contactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be 50 characters or less")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={css.form_style}>
          <label>Name</label>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
        </div>
        <div className={css.form_style}>
          <label>Number</label>
          <Field type="text" name="number" placeholder="Phone number" />
          <ErrorMessage name="number" component="div" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
