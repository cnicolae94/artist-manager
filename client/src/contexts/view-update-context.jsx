import { createContext, useState } from "react";

export const ViewUpdateContext = createContext();

export const ViewUpdateProvider = ({ children }) => {
  const [isViewUpdateOpen, setIsViewUpdateOpen] = useState(false);

  return (
    <ViewUpdateContext.Provider
      value={{ isViewUpdateOpen, setIsViewUpdateOpen }}
    >
      {children}
    </ViewUpdateContext.Provider>
  );
};
