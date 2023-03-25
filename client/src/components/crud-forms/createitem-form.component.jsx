import { memo, useContext, useState } from "react";
import {
  artistIdText,
  artistNameText,
  artistDOBText,
  createAnArtist,
  createAPainting,
  createText,
  paintingImageUrlText,
  paintingNameText,
  artistURLText,
} from "../../assets/headers";
import FormInput from "./_form-input.component";
import "./_form.styles.css";
import axios from "axios";
import { SnackbarContext } from "../../contexts/snackbar-context";
import { Toast } from "react-bootstrap";
import ToastMessage from "../toast/toast.component";

const defaultArtist = {
  artistName: "",
  artistDOB: 0,
  artistImg: "",
};

// const defaultPainting = {
//   paintingName: "",
//   paintingURL: "",
//   artistID: 0,
// };

const CreateItemForm = () => {
  const [artist, setArtist] = useState({});
  const [painting, setPainting] = useState({});
  const [message, setMessage] = useState("");

  const { isSnbOpen, setIsSnbOpen } = useContext(SnackbarContext);

  const onChangeArtist = (event) => {
    const { name, value } = event.target;
    setArtist({ ...artist, [name]: value });
  };
  const onChangePainting = (event) => {
    const { name, value } = event.target;
    setArtist({ ...painting, [name]: value });
  };

  const toggleSnb = () => setIsSnbOpen((current) => !current);

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
    setArtist({});
  };

  const handlePaintingSubmit = async (event) => {
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

  return (
    <div className="create-item-wrapper">
      <>
        <h1 className="create-header">{createText}</h1>
        <form className="artist-form-container input-group">
          <h4>{createAnArtist}</h4>
          <FormInput
            required
            type="text"
            displaytext={artistNameText}
            name="artistName"
            onChange={onChangeArtist}
          />
          <FormInput
            required
            type="number"
            displaytext={artistDOBText}
            name="artistDOB"
            onChange={onChangeArtist}
          />
          <FormInput
            optional="true"
            type="text"
            displaytext={artistURLText}
            name="artistImg"
            onChange={onChangeArtist}
          />
          <button
            type="button"
            className="btn btn-secondary submit"
            onClick={() => handleArtistSubmit()}
          >
            Submit an artist
          </button>
        </form>
        <form className="paint-form-container input-group">
          <h4>{createAPainting}</h4>
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
        <ToastMessage msg={message} />
      </>
    </div>
  );
};

export default CreateItemForm;
