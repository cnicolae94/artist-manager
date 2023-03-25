import { createContext, useState } from "react";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [isSnbOpen, setIsSnbOpen] = useState(false);

  return (
    <SnackbarContext.Provider value={{ isSnbOpen, setIsSnbOpen }}>
      {children}
    </SnackbarContext.Provider>
  );
};
