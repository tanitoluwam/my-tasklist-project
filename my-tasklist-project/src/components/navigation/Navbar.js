import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar pt-3 mb-2">
      <div className="container">
        <img
          src="/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
        />
        <div className="links">
          <Link
            className="btn btn-outline-light text-light rounded-pill mx-1 btn-login"
            to="/LogIn"
          >
          Sign Out
          </Link>
        </div>
      </div>
    </nav>
  );
};
