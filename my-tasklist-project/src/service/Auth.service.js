import { http } from "../plugins/Axios";
import { CustomErrorComponent } from "components/shared/CustomErrorComponent";

export const loginUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/login", payload);
    localStorage.setItem("token", data.token);
    http.defaults.headers.common["Authorization"] = `Bearer${data.token}`;
    return data;
  } catch (error) {
    CustomErrorComponent({ message: error.message });
  }
};

export const registerUser = async (payload) => {
  try {
    const { data } = await http.post("/api/auth/register", payload);
    return data;
  } catch (error) {
    CustomErrorComponent({ message: error.message });
  }
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
  delete http.defaults.headers.common["Authorization"];
  const { data } = await http.post("/api/auth/logout", {});
  return data;
};

export const readUserProfile = async () => http.get("/api/users/me");
