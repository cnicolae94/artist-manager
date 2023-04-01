import { useContext } from "react";
import { albumText } from "../../assets/headers";
import { ArtistContext } from "../../contexts/artists-context";
import "./artist-container.styles.css";
import { LoadingSpinner } from "../spinner/spinner.component";
import ArtistCard from "../artist-card/artist-card.component";
import { ModalPopUpContext } from "../../contexts/modal-context";
import AddPaintingModal from "../crud-forms/add-painting-modal.component";

//displays all artists in an album type page

export const AlbumContainer = () => {
  const { isLoading, artistList } = useContext(ArtistContext); //artistList provides all artists to map through
  const { isModalOpen } = useContext(ModalPopUpContext);

  console.log(isLoading); //if loading- show spinner

  return (
    <>
      {isModalOpen ? <AddPaintingModal /> : null}
      <h1 className="album-text">{albumText}</h1>
      <div className="album-container">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          artistList.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))
        )}
      </div>
    </>
  );
};
