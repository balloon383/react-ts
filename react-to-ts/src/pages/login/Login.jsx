import React from 'react'
import styles from './styles.module.css'
import { Formik } from "formik";
import {Button, TextField} from "@mui/material";

export default function Login() {
  return (
    <section className={styles.login}>
      <section className={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className={styles.formBox}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Email"
              />
              {errors.email && touched.email && errors.email}
              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Password"
              />
              {errors.password && touched.password && errors.password}
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={isSubmitting}
                className={styles.loginButton}
                size="large"
              >
                Log In
              </Button>
              <Button variant="contained" color="error" size="small">
                Register
              </Button>
            </form>
          )}
        </Formik>
      </section>
    </section>
  );
}
