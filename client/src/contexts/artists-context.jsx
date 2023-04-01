import axios from "axios";
import { createContext, useState } from "react";

export const ArtistContext = createContext([]);

export const ArtistProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [artistList, setArtists] = useState(async () => {
    const fetchArtists = async () =>
      await axios
        .get("http://localhost:8080/artists")
        .then((response) => {
          if (response.data) {
            setArtists(response.data);
            setisLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    return fetchArtists();
  });

  console.log(artistList);

  return (
    <ArtistContext.Provider value={{ isLoading, artistList }}>
      {children}
    </ArtistContext.Provider>
  );
};
