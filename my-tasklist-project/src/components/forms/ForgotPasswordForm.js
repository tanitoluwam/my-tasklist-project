import { useState } from "react";
import { useFormik } from "formik"

const initialValues = {
  email : "",
}
const onSubmit = (values) => {

};
const validate = values =>{
  let errors = {};
  if (!values.email) {
    errors.email = "required";
  }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
}
export const ForgotPasswordForm =() => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log("visited field", formik.touched);
  return (
    <div className="row">
      <div className="col-6 welcome-section text-center mb-3 mx-auto">
        <h2 className="fs-2 mb-3 text-light">Welcome Back!</h2>
        <p className="w-50 mx-auto text-light mb-2 fs-5">
          Ready for another amazing experience?
        </p>
      </div>
      <form  onSubmit={formik.handleSubmit} className="col-6  create-account  w-50">
        <h2 className="mb-3 fs-2 fw-bold text-center">Forgot Password?</h2>
        <p className="text-center w-50 mx-auto">
          Don't worry, we'll send you an email with a reset link.
        </p>
        <div className="mb-3 w-50 mx-auto">
          <label htmlFor="email" 
          className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control mb3 bg-light mx-auto py-2"
            id="email"
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} 
          />
          {formik.touched.email && formik.errors.email? <div id="emailHelp" className="form-text text-danger">{formik.errors.email}</div> :null}
        </div>
        <div className="text-center">
          <button className="btn btn-lg text-light rounded-pill cta-btn mt-2"
          disabled={!formik.isValid ||formik.isSubmitting }>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};


// this form used useformik hook unlike the remaining two that use yup.