import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters")
      .matches(/^[0-9]+$/, "Number must contain only digits")
      .required("Number is required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.formContainer}>
          <div className={styles.formField}>
            <label htmlFor="name">Name:</label>
            <Field name="name" type="text" id="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="number">Number:</label>
            <Field name="number" type="tel" id="number" />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </div>

          <button className={styles.formBtn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
