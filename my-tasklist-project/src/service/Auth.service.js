import { http } from "../plugins/Axios";
import { toast } from "react-toastify";

export const loginUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/login", payload);
    localStorage.setItem("token", data.token);
    http.defaults.headers.common["Authorization"] = `Bearer${data.token}`;
    toast.success("You are logged in");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const registerUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/register", payload);
    toast.success("Registeration successful");
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logoutUser = async () => http.post("/api/auth/logout");

export const readUserProfile = async () => http.get("/api/users/me");
