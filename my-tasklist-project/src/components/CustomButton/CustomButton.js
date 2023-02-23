import React from "react";

export const CustomButton = ({ disabled, text }) => {
  return (
    <div className="text-center">
      <button
        className="btn btn-lg text-light rounded-pill cta-btn w-25"
        type="submit"
        disabled={disabled}
      >
       {text}
      </button>
    </div>
  );
};
