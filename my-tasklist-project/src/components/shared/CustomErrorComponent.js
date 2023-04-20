import React from "react";
import { toast } from "react-toastify";

export const CustomErrorComponent = ({ message }) => {
  return (
    <p>
      {toast.error(message)}
    </p>
  );
};
