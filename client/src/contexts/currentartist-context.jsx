import { createContext, useState } from "react";

export const CurrentArtistContext = createContext();

export const CurrentArtistProvider = ({ children }) => {
  const [currentArtist, setCurrentArtist] = useState({});

  return (
    <CurrentArtistContext.Provider value={{ currentArtist, setCurrentArtist }}>
      {children}
    </CurrentArtistContext.Provider>
  );
};
