import "./add-painting-modal.styles.css";
import FormInput from "./_form-input.component";
import {
  artistIdText,
  createAPainting,
  paintingImageUrlText,
  paintingNameText,
  paintingYearText,
} from "../../assets/headers";
import ToastMessage from "../toast/toast.component";
import { ModalPopUpContext } from "../../contexts/modal-context";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { CurrentArtistContext } from "../../contexts/currentartist-context";
import { ToastContext } from "../../contexts/toast-context";

const AddPaintingModal = () => {
  const [painting, setPainting] = useState({});
  const [message, setMessage] = useState("");
  const { isSnbOpen, setIsSnbOpen } = useContext(ToastContext);
  const { isModalOpen, setIsModalOpen } = useContext(ModalPopUpContext);
  const { currentArtist, setCurrentArtist } = useContext(CurrentArtistContext);

  const { paintingTitle, paintingURL, paintingYear } = painting;
  console.log(painting);

  const onChangePainting = (event) => {
    const { name, value } = event.target;
    setPainting({ ...painting, [name]: value });
  };

  const handlePaintingSubmit = async (event) => {
    console.log(currentArtist);
    const payload = {
      paintingTitle: paintingTitle,
      paintingURL: paintingURL,
      paintingYear: paintingYear,
      artistId: currentArtist.artistId,
    };

    console.log(payload);

    await axios
      .post("http://localhost:8080/paintings", payload)
      .then((response) => {
        setMessage(response.data.message);
        setIsSnbOpen(true);
      })
      .catch((error) => {
        setMessage(error.message + " CODE: " + error.code);
        setIsSnbOpen(true);
      });
    setPainting({});
    setCurrentArtist({});
  };

  // <h4>{createAPainting}</h4>

  const handleCloseModal = () => {
    setIsModalOpen((current) => !current);
  };

  return (
    <>
      <Modal
        show={isModalOpen}
        onHide={handleCloseModal}
        className="painting-modal-container"
      >
        <Modal.Header className="painting-modal-header" closeButton>
          {createAPainting}
        </Modal.Header>
        <Modal.Body className="painting-modal-body">
          <p>Artist ID: {currentArtist.artistId}</p>
          <form className="paint-form-container input-group">
            <FormInput
              required
              type="text"
              displaytext={paintingNameText}
              name="paintingTitle"
              onChange={onChangePainting}
            />
            <FormInput
              type="text"
              displaytext={paintingImageUrlText}
              name="paintingURL"
              onChange={onChangePainting}
            />
            <FormInput
              type="text"
              displaytext={paintingYearText}
              name="paintingYear"
              onChange={onChangePainting} //get the artist ID on click and set as value but we'll see about it
            />
          </form>
        </Modal.Body>
        <Modal.Footer className="painting-modal-footer">
          <button
            type="button"
            className="btn btn-primary submit"
            onClick={() => handlePaintingSubmit()}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
      <ToastMessage msg={message} />
    </>
  );
};

export default AddPaintingModal;
