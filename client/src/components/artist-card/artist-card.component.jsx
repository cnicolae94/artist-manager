import { Button, ButtonGroup, Card } from "react-bootstrap";
import "./artist-card.styles.css";
import { useContext } from "react";
import { ModalPopUpContext } from "../../contexts/modal-context";
import { CurrentArtistContext } from "../../contexts/currentartist-context";

const placeholderURL =
  "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png";
const placeholderName = "ArtistName";
const placeholderDOB = "This artist was born in 1001";

const ArtistCard = ({ artist }) => {
  const { setIsModalOpen } = useContext(ModalPopUpContext);
  const { currentArtist, setCurrentArtist } = useContext(CurrentArtistContext);
  const { artistDOB, artistId, artistImg, artistName } = artist;

  //   console.log(artist);

  const handleArtistAdd = () => {
    console.log("This helps you update the artist");
    setCurrentArtist(artist);
    setIsModalOpen(true);
  };

  const handleArtistUpdate = () => {
    console.log("This is the update button");
  };

  const handleArtistDelete = () => {
    console.log("This is the artist ID", artistId);
  };

  return (
    <Card key={artistId} style={{ width: "30%" }}>
      <Card.Img
        className="m-auto align-self-center"
        variant="top"
        src={artistImg !== placeholderURL ? artistImg : placeholderURL}
        style={{ maxHeight: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{artistName}</Card.Title>
        <Card.Text>Born: {artistDOB}</Card.Text>
        <ButtonGroup size="sm" className="mb-2 d-flex justify-content-between">
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
