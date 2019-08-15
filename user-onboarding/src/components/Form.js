import React from "react";
import { Form, Field, withFormik } from "formik";
import axios from "axios";

const UserForm = ({ values }) => {
  return (
    <div>
      <h1>User Details</h1>
      <Form>
        <Field 
            component="input" 
            type="text" 
            name="name" 
            placeholder="Name" 
        />
        <Field 
            component="input"
            type="text"
            name="email"
            placeholder="Email"
        />
        <Field 
            component="input"
            type="text"
            name="password"
            placeholder="Password"
        />
        <label>
            Agree to Terms of Service
            <Field 
                type="checkbox"
                name="termsOfService"
                checked={values.termsOfService}
            />
        </label>
        <button>Submit</button>
      </Form>
    </div>
  );
};

const formikHOC = withFormik({
  mapPropsToValues({ name, email, password, termsOfService }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      termsOfService: termsOfService || false
    };
  }
});
const UserFormWithFormik = formikHOC(UserForm)

export default UserFormWithFormik;
