import FormInput from "./_form-input.component";
import {
  artistIdText,
  createAPainting,
  paintingImageUrlText,
  paintingNameText,
} from "../../assets/headers";
import ToastMessage from "../toast/toast.component";
import { ModalPopUpContext } from "../../contexts/modal-context";
import { useContext } from "react";
import { Modal } from "react-bootstrap";

const AddPaintingModal = () => {
  const [painting, setPainting] = useState({});
  const [message, setMessage] = useState("");
  const { isModalOpen, setIsModalOpen } = useContext(ModalPopUpContext);
  const onChangePainting = (event) => {
    const { name, value } = event.target;
    setPainting({ ...painting, [name]: value });
  };

  const handlePaintingSubmit = async (event) => {
    const [painting, setPainting] = useState({});

    await axios
      .post("http://localhost:8080/paintings", painting)
      .then((response) => {
        setMessage(response.data.message);
        setIsSnbOpen(true);
      })
      .catch((error) => {
        setMessage(error.message + " CODE: " + error.code);
        setIsSnbOpen(true);
      });
    setPainting({});
  };

  // <h4>{createAPainting}</h4>

  const handleCloseModal = () => {
    setIsModalOpen((current) => !current);
  };

  return (
    <>
      <Modal onHide={handleCloseModal}>
        <Modal.Header closeButton>{createAPainting}</Modal.Header>
        <>
          <form className="paint-form-container input-group">
            <FormInput
              required
              type="text"
              displaytext={paintingNameText}
              name="paintingName"
              onChange={onChangePainting}
            />
            <FormInput
              type="text"
              displaytext={paintingImageUrlText}
              name="paintingURL"
              onChange={onChangePainting}
            />
            <FormInput
              required
              type="text"
              displaytext={artistIdText}
              name="artistID"
              onChange={onChangePainting}
            />

            <button
              type="button"
              className="btn btn-secondary submit"
              onClick={() => handlePaintingSubmit()}
            >
              Submit a painting
            </button>
          </form>
        </>
      </Modal>
      <ToastMessage msg={message} />
    </>
  );
};

export default AddPaintingModal;
