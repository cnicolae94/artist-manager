import { useEffect, useState } from "react";
import { albumText } from "../../assets/headers";

//displays all artists in an album type page

export const AlbumContainer = () => {
  const [artists, setArtists] = useState([]);

  async function getArtists() {
    try {
      const response = await fetch("http://localhost:8080/artists");
      const data = await response.json();
      setArtists(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getArtists();
  }, []);

  console.log(artists); //works

  return <h1>{albumText}</h1>;
};
