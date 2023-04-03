import { Button, ButtonGroup, Card } from "react-bootstrap";
import "./artist-card.styles.css";
import { useContext } from "react";
import { ModalPopUpContext } from "../../contexts/modal-context";
import { CurrentArtistContext } from "../../contexts/currentartist-context";
import { useNavigate } from "react-router-dom";
import { ViewUpdateContext } from "../../contexts/view-update-context";
import axios from "axios";

const placeholderURL =
  "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png";

export const isUrlValid = (string) => {
  try {
    return Boolean(new URL(string));
  } catch (e) {
    return false;
  }
};

const ArtistCard = ({ artist }) => {
  const { setIsModalOpen } = useContext(ModalPopUpContext);
  const { setCurrentArtist } = useContext(CurrentArtistContext);
  const { setIsViewUpdateOpen } = useContext(ViewUpdateContext);
  const { artistDOB, artistId, artistImg, artistName } = artist;
  const currentLocation = window.location;

  const navigate = useNavigate();

  const handleArtistAdd = () => {
    setCurrentArtist(artist);
    setIsModalOpen(true);
  };

  const handleArtistUpdate = () => {
    window.scrollTo(0, 0);
    setCurrentArtist(artist);
    setIsViewUpdateOpen(true);
  };

  const handleArtistDelete = () => {
    let answer = window.confirm(
      "Are you sure you want to delete the selected artist? This cannot be undone."
    );
    if (answer) {
      const deleteURL = `http://localhost:8080/artists/${artistId}`;
      axios
        .delete(deleteURL)
        .then((response) => {
          window.alert(response.data.message);
          currentLocation.reload();
        })
        .catch((error) => {
          window.alert(error.message + " CODE: " + error.code);
        });
    } else return;
  };

  const handleArtistViewPaintings = () => {
    navigate(`${artistId}`);
  };

  return (
    <Card key={artistId}>
      <Card.Img
        className="m-auto align-self-center"
        variant="top"
        src={isUrlValid(artistImg) ? artistImg : placeholderURL}
        style={{ height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{artistName}</Card.Title>
        <Card.Text>Born: {artistDOB}</Card.Text>
        <ButtonGroup size="sm" className="mb-2 d-flex justify-content-between">
          <Button className="artist-card-btn" variant="primary" onClick={handleArtistViewPaintings}>
            View paintings
          </Button>
          <Button className="artist-card-btn" variant="primary" onClick={handleArtistAdd}>
            Add painting
          </Button>
          <Button className="artist-card-btn" variant="primary" onClick={handleArtistUpdate}>
            Update
          </Button>
          <Button className="artist-card-btn" variant="primary" onClick={handleArtistDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ArtistCard;
