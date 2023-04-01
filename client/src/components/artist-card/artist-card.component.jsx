import { Button, ButtonGroup, Card } from "react-bootstrap";
import "./artist-card.styles.css";
import { useContext } from "react";
import { ModalPopUpContext } from "../../contexts/modal-context";
import { CurrentArtistContext } from "../../contexts/currentartist-context";
import { useNavigate } from "react-router-dom";

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
  const { currentArtist, setCurrentArtist } = useContext(CurrentArtistContext);
  const { artistDOB, artistId, artistImg, artistName } = artist;

  const navigate = useNavigate();

  const handleArtistAdd = () => {
    setCurrentArtist(artist);
    setIsModalOpen(true);
    window.alert("Painting added");
  };

  const handleArtistUpdate = () => {
    console.log("This is the update button");
  };

  const handleArtistDelete = () => {
    console.log("This is the artist ID", artistId);
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
        style={{ maxHeight: "500px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{artistName}</Card.Title>
        <Card.Text>Born: {artistDOB}</Card.Text>
        <ButtonGroup size="sm" className="mb-2 d-flex justify-content-between">
          <Button variant="primary" onClick={handleArtistViewPaintings}>
            View paintings
          </Button>
          <Button variant="primary" onClick={handleArtistAdd}>
            Add painting
          </Button>
          <Button variant="primary" onClick={handleArtistUpdate}>
            Update
          </Button>
          <Button variant="primary" onClick={handleArtistDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default ArtistCard;
