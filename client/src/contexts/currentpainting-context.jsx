import { createContext, useState } from "react";

export const CurrentPaintingContext = createContext();

export const CurrentPaintingProvider = ({ children }) => {
  const [currentPainting, setCurrentPainting] = useState({});

  return (
    <CurrentPaintingContext.Provider
      value={{ currentPainting, setCurrentPainting }}
    >
      {children}
    </CurrentPaintingContext.Provider>
  );
};
