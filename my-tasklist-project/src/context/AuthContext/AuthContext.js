import { CustomErrorComponent } from "components/shared/CustomErrorComponent";
import { useLoadingContext } from "context/LoadingContext/LoadingContext";
import { createContext, useContext, useState } from "react";
import { readUserProfile } from "service";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const { isLoading, setIsLoading } = useLoadingContext();
  const [userProfile, setUserProfile] = useState(null);
  const getUserProfile = async () => {
    try {
      setIsLoading(true);
      const { data } = await readUserProfile();
      setUserProfile(data);
    } catch (error) {
      CustomErrorComponent({ message: error.message });
    } finally {
      setIsLoading(false);
    }
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
