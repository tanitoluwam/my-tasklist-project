import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "service";

export const Navbar = () => {
  const navigate = useNavigate();
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
          <button
            className="btn btn-outline-light text-light rounded-pill mx-1 btn-login"
            onClick={logoutUser}
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};
