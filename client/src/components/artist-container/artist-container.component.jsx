import { useContext } from "react";
import { albumText } from "../../assets/headers";
import { ArtistContext } from "../../contexts/artists-context";
import "./artist-container.styles.css";
import { LoadingSpinner } from "../spinner/spinner.component";
import ArtistCard from "../artist-card/artist-card.component";
import { ModalPopUpContext } from "../../contexts/modal-context";
import AddPaintingModal from "../crud-forms/add-painting-modal.component";

export const AlbumContainer = () => {
  const { isLoading, artistList } = useContext(ArtistContext);
  const { isModalOpen } = useContext(ModalPopUpContext);

  return (
    <>
      {isModalOpen ? <AddPaintingModal /> : null}
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
