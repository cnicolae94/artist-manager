import "./_form.styles.css";
import { useContext, useState } from "react";
import {
  artistNameText,
  artistDOBText,
  createText,
  artistURLText,
} from "../../assets/headers";
import FormInput from "./_form-input.component";
import axios from "axios";
import { ToastContext } from "../../contexts/toast-context";
import ToastMessage from "../toast/toast.component";
import { Button, Card, Form } from "react-bootstrap";

const CreateItemForm = () => {
  const [artist, setArtist] = useState({});
  const [message, setMessage] = useState("");
  const currentLocation = window.location;

  const { setIsSnbOpen } = useContext(ToastContext);

  const onChangeArtist = (event) => {
    const { name, value } = event.target;
    setArtist({ ...artist, [name]: value });
  };

  const handleArtistSubmit = async (event) => {
    await axios
      .post("http://localhost:8080/artists", artist)
      .then((response) => {
        setMessage(response.data.message);
        setIsSnbOpen(true);
      })
      .catch((error) => {
        setMessage(error.message + " CODE: " + error.code);
        setIsSnbOpen(true);
      });
    window.alert("The artist has been registered.");
    currentLocation.reload();
    setArtist({});
  };

  return (
    <Card>
      <ToastMessage msg={message} />
      <Card.Header>{createText}</Card.Header>
      <Card.Body>
        <Form>
          <div className="row">
            <Form.Group className="artist-name-create-input col">
              <Form.Label>Artist Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder={artistNameText}
                name="artistName"
                onChange={onChangeArtist}
              />
            </Form.Group>
            <Form.Group className="artist-name-create-input col">
              <Form.Label>Artist Name</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder={artistDOBText}
                name="artistDOB"
                onChange={onChangeArtist}
              />
            </Form.Group>
          </div>
          <Form.Group className="artist-name-create-input col">
            <Form.Label>Artist Name</Form.Label>
            <Form.Control
              optional="true"
              type="url"
              placeholder={artistURLText}
              name="artistImg"
              onChange={onChangeArtist}
            />
          </Form.Group>
        </Form>
        <Button
          className="btn btn-primary submit"
          onClick={() => handleArtistSubmit()}
        >
          Submit artist
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CreateItemForm;
