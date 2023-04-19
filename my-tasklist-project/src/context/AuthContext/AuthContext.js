import { createContext, useContext, useState } from "react";
import { readUserProfile } from "service";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const getUserProfile = async () => {
    const { data } = await readUserProfile();
    setUserProfile(data);
  };

  return (
    <AuthContext.Provider value={{ userProfile, getUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
