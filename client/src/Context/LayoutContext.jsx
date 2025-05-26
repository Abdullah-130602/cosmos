import { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";

const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  // const currentUrl = window.location.pathname;
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <LayoutContext.Provider value={{ currentUrl }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
