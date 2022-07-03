import React from "react";

export const AuthLayout = () => {
  return (
    <div className="row">
      <div className="col-6  text-center welcome-section w-50">
        <h2 className="fs-1 mb-2 text-light  pb-2 fw-bold">Hello Friend,</h2>
        <p className="text-light fs-5 w-50 mx-auto pb-3">
          To keep connected with us, please sign up with your personal info
        </p>
      </div>
      <form className="col-6 create-account w-50">
        <h2 className="mb-4 fs-2 fw-bold text-center">Glad to see You</h2>
        <div className="mb-3 mx-auto w-50">
          <label for="name" className="form-label">
            What should we call you
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3 mx-auto w-50">
          <label for="email" class="form-label">
            Your Email address?
          </label>
          <input type="email" class="form-control" id="email" />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-lg text-light rounded-pill cta-btn w-25 mx-auto">
            SIGN UP
          </button>
        </div>
        <div id="emailHelp" className="text-center mt-3 ">
          Already have an account?
          <Link to="/LogIn">Login</Link>
        </div>
      </form>
    </div>
  );
};
