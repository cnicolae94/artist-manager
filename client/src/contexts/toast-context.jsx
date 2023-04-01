import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [isSnbOpen, setIsSnbOpen] = useState(false);

  return (
    <ToastContext.Provider value={{ isSnbOpen, setIsSnbOpen }}>
      {children}
    </ToastContext.Provider>
  );
};
