import { useContext } from "react";
import { ArtistContext } from "../../contexts/artists-context";
import "./artist-container.styles.css";
import { LoadingSpinner } from "../spinner/spinner.component";
import ArtistCard from "../artist-card/artist-card.component";
import { ModalPopUpContext } from "../../contexts/modal-context";
import AddPaintingModal from "../crud-forms/add-painting-modal.component";
import { ViewUpdateContext } from "../../contexts/view-update-context";
import UpdateViewForm from "../update-view-form/update-view-form.component";
import { CurrentArtistContext } from "../../contexts/currentartist-context";

export const AlbumContainer = () => {
  const { isLoading, artistList } = useContext(ArtistContext);
  const { isModalOpen } = useContext(ModalPopUpContext);
  const { isViewUpdateOpen } = useContext(ViewUpdateContext);
  const { currentArtist } = useContext(CurrentArtistContext);

  return (
    <>
      {isModalOpen ? <AddPaintingModal /> : null}
      {isViewUpdateOpen ? <UpdateViewForm item={currentArtist} /> : null}
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
