import { useLoadingContext } from "context/LoadingContext/LoadingContext";
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { readUserProfile } from "service";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await readUserProfile();
        setUser(data);
      } catch (error) {}
    };
    getUserProfile();
  }, []);

  const value = useMemo(() => {
    return { user, setUser };
  }, [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
