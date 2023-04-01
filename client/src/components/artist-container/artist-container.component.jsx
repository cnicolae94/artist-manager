import { useContext, useEffect, useState } from "react";
import { albumText } from "../../assets/headers";
import { ArtistContext } from "../../contexts/artists-context";
import { LoadingSpinner } from "../spinner/spinner.component";

//displays all artists in an album type page

export const AlbumContainer = () => {
  const { isLoading, artistList } = useContext(ArtistContext);

  console.log(isLoading); //if loading- show spinner

  return (
    <div className="album-container">
      <h1>{albumText}</h1>
      <>{isLoading ? <LoadingSpinner /> : null}</>
    </div>
  );
};
