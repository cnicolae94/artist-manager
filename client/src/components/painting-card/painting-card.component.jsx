import { ButtonGroup, Button, Card } from "react-bootstrap";
import "./painting-card.styles.css";
import { isUrlValid } from "../artist-card/artist-card.component";
import { useContext, useState } from "react";
import { ToastContext } from "../../contexts/toast-context";
import axios from "axios";
import ToastMessage from "../toast/toast.component";
import { CurrentPaintingContext } from "../../contexts/currentpainting-context";
import { ViewUpdateContext } from "../../contexts/view-update-context";

const placeholderURL =
  "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image-300x225.png";

const PaintingCard = ({ painting }) => {
  const [message, setMessage] = useState("");
  const { setIsSnbOpen } = useContext(ToastContext);
  const { currentPainting, setCurrentPainting } = useContext(
    CurrentPaintingContext
  );
  const { setIsViewUpdateOpen } = useContext(ViewUpdateContext);
  const { paintingId, paintingTitle, paintingURL, paintingYear } = painting;

  const handleViewPainting = () => {
    console.log("View painting");
  };

  const handlePaintingUpdate = () => {
    window.scrollTo(0, 0);
    setCurrentPainting(painting);
    setIsViewUpdateOpen(true);
  };

  const handlePaintingDelete = () => {
    let answer = window.confirm(
      "Are you sure you want to delete the selected painting? This cannot be undone.?"
    );
    if (answer) {
      const deleteURL = `http://localhost:8080/paintings/${paintingId}`;
      axios
        .delete(deleteURL)
        .then((response) => {
          setMessage(response.data.message);
          setIsSnbOpen(true);
          window.reload();
        })
        .catch((error) => {
          setMessage(error.message + " CODE: " + error.code);
          setIsSnbOpen(true);
        });
    } else return;
  };

  return (
    <>
      <ToastMessage message={message} />
      <Card>
        <Card.Img
          className="m-auto align-self-center"
          variant="top"
          src={isUrlValid(paintingURL) ? paintingURL : placeholderURL}
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{paintingTitle}</Card.Title>
          <Card.Text>This painting was made in year {paintingYear}</Card.Text>
        </Card.Body>
        <ButtonGroup size="sm" className="mb-2 d-flex justify-content-between">
          <Button variant="primary" onClick={handleViewPainting}>
            View painting
          </Button>
          <Button variant="primary" onClick={handlePaintingUpdate}>
            Update
          </Button>
          <Button variant="primary" onClick={handlePaintingDelete}>
            Delete
          </Button>
        </ButtonGroup>
      </Card>
    </>
  );
}; //will take painting as a param

export default PaintingCard;
