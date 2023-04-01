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

const CreateItemForm = () => {
  const [artist, setArtist] = useState({});
  const [message, setMessage] = useState("");

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
    event.target.reset();
    window.alert("The artist has been registered.");
    window.reload();
    setArtist({});
  };

  return (
    <>
      <h1 className="create-header">{createText}</h1>
      <div className="create-item-wrapper">
        <>
          <form className="input-group">
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
              className="btn btn-primary submit"
              onClick={() => handleArtistSubmit()}
            >
              Submit an artist
            </button>
          </form>
          <ToastMessage msg={message} />
        </>
      </div>
    </>
  );
};

export default CreateItemForm;
