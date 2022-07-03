import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../shared/FormikControl";
import { loginUser } from "../../service";

export const LoginForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    try {
      const response = await loginUser(values);
      // save token in cookies
      console.log("🚀 ~ file: LogInForm.js ~ line 19 ~ onSubmit ~ response", response)
      // redirect user to dashboard
      navigate('/dashboard')
    } catch (error) {
      navigate('/dashboard')
      console.log('error', error.response)
    } 
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div className="row">
              <div className="col-6 text-center welcome-section w-50">
                <h2 className="fs-2 mb-2 text-light pb-2 fw-bold">
                  Hey, Welcome Back!
                </h2>
                <p className="text-light fs-5 w-50 mx-auto pb-3">
                  To keep connected with us, please login with your personal
                  info
                </p>
              </div>
              <div className="col-6  w-50 login-details">
                <h2 className="mb-3 fs-2 text-center fw-bold">Login</h2>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="email"
                    name="email"
                    label="Email"
                    className="form-control  mb2 bg-light mx-auto py-2"
                  />
                </div>
                <div className="mb-1 mx-auto w-50">
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    label="Password"
                    className="form-control  mb2 bg-light mx-auto py-2"
                  />
                </div>
                <div className="mb-3 text-center">
                  <Link
                    className="text-decoration-none link-color"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-lg text-light rounded-pill cta-btn w-25"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Login
                  </button>
                </div>
              </div>
              ;
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};


