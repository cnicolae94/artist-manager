//http://localhost:8080/paintings/

import axios from "axios";
import { createContext, useState } from "react";

export const PaintingsContext = createContext([]);

export const PaintingsProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [paintingsList, setPaintings] = useState(async () => {
    const fetchAllPaintings = async () =>
      await axios
        .get("http://localhost:8080/paintings")
        .then((response) => {
          if (response.data) {
            setPaintings(response.data);
            setisLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    return fetchAllPaintings();
  });

  return (
    <PaintingsContext.Provider value={{ isLoading, paintingsList }}>
      {children}
    </PaintingsContext.Provider>
  );
};
