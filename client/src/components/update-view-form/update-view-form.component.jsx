import { useContext, useState } from "react";
import "./update-view-form.styles.css";
import { Button, ButtonGroup, Card, Form } from "react-bootstrap";
import { ViewUpdateContext } from "../../contexts/view-update-context";
import axios from "axios";
import ToastMessage from "../toast/toast.component";
import { ToastContext } from "../../contexts/toast-context";

const UpdateViewForm = ({ item }) => {
  const [currentItem, setCurrentItem] = useState({});
  const [message, setMessage] = useState("");
  const { setIsSnbOpen } = useContext(ToastContext);
  const { setIsViewUpdateOpen } = useContext(ViewUpdateContext);
  const currentLocation = window.location;
  const headerText = "View item: ";

  const onChangeItem = (event) => {
    const { name, value } = event.target;
    setCurrentItem({ ...currentItem, [name]: value });
  };

  const handleCloseComp = () => {
    setIsViewUpdateOpen(false);
  };

  const handleSubmit = async () => {
    if (!item.paintingId) {
      const url = `http://localhost:8080/artists/${item.artistId}`;
      let object = {
        artistName: currentItem.name ? currentItem.name : item.artistName,
        artistImg: currentItem.url ? currentItem.url : item.artistImg,
        artistDOB: currentItem.year ? currentItem.year : item.artistDOB,
        artistId: item.artistId,
      };
      console.log(object);
      await axios
        .put(url, object)
        .then((response) => {
          console.log(response);
          setMessage(response.data.message);
          console.log(message);
          setIsSnbOpen(true);
          window.alert("Artist updated");
          currentLocation.reload();
          setIsViewUpdateOpen(false);
        })
        .catch((err) => {
          setMessage(err.message + " CODE: " + err.code);
          setIsSnbOpen(true);
        });
    } else {
      const url = `http://localhost:8080/paintings/${item.paintingId}`;
      let object = {
        paintingTitle: currentItem.name ? currentItem.name : item.paintingTitle,
        paintingURL: currentItem.url ? currentItem.url : item.paintingURL,
        paintingYear: currentItem.year ? currentItem.year : item.paintingYear,
        artistId: item.artistId,
      };
      console.log(object);
      await axios
        .put(url, object)
        .then((response) => {
          console.log(response);
          setMessage(response.data.message);
          setIsSnbOpen(true);
          window.alert("Painting updated");
          currentLocation.reload();
          setIsViewUpdateOpen(false);
        })
        .catch((err) => {
          setMessage(err.message + " CODE: " + err.code);
          setIsSnbOpen(true);
        });
    }
  };

  const header = `${headerText} ${
    item.artistName ? item.artistName : item.paintingTitle
  }`;

  return (
    <>
      <ToastMessage msg={message} />
      <Card className="update-card">
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <Form.Group className="artist-id-label col">
                <Form.Label>Artist ID</Form.Label>
                <Form.Control
                  disabled
                  name="artistId"
                  type="number"
                  defaultValue={item.artistId}
                />
              </Form.Group>
              <Form.Group className="item-name-label col">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={onChangeItem}
                  defaultValue={
                    item.artistName ? item.artistName : item.paintingTitle
                  }
                />
              </Form.Group>
              <Form.Group className="item-year-label col">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="number"
                  name="year"
                  onChange={onChangeItem}
                  defaultValue={
                    item.artistDOB ? item.artistDOB : item.paintingYear
                  }
                />
              </Form.Group>
            </div>
            <Form.Group className="item-url-label">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                name="url"
                onChange={onChangeItem}
                defaultValue={
                  item.artistImg ? item.artistImg : item.paintingURL
                }
              />
            </Form.Group>
            <Form.Group className="painting-id-label">
              <Form.Label>Painting ID - if applicable</Form.Label>
              <Form.Control
                disabled
                name="paintingId"
                type="number"
                defaultValue={item.paintingId ? item.paintingId : ""}
              />
            </Form.Group>
          </Form>
          <ButtonGroup>
            <Button
              type="button"
              className="view-update-btn"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              variant="secondary"
              className="view-update-btn"
              onClick={handleCloseComp}
            >
              Cancel
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default UpdateViewForm;

{
}
