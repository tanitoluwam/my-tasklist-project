import { useContext, createContext, useState } from "react";
import LoadingSpinner from "assets/loadingSpinner.gif";

const LoadingContext = createContext();

export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    return (
      <div>
        <img src={LoadingSpinner} alt="loading spinner" className="spinner" />
      </div>
    );
  }
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  return useContext(LoadingContext);
};