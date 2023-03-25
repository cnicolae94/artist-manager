import { useContext, useState } from "react";
import {
  artistNameText,
  artistDOBText,
  createAnArtist,
  createText,
  artistURLText,
} from "../../assets/headers";
import FormInput from "./_form-input.component";
import "./_form.styles.css";
import axios from "axios";
import { SnackbarContext } from "../../contexts/snackbar-context";
import ToastMessage from "../toast/toast.component";

const CreateItemForm = () => {
  const [artist, setArtist] = useState({});
  const [message, setMessage] = useState("");

  const { setIsSnbOpen } = useContext(SnackbarContext);

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
    setArtist({});
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

        <ToastMessage msg={message} />
      </>
    </div>
  );
};

export default CreateItemForm;
