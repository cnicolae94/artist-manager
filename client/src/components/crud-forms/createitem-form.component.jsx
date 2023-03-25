import { useState } from "react";
import {
  artistIdText,
  artistNameText,
  artistDOBText,
  createAnArtist,
  createAPainting,
  createText,
  paintingImageUrlText,
  paintingNameText,
} from "../../assets/headers";
import FormInput from "./_form-input.component";
import "./_form.styles.css";
const axios = require("axios");

const defaultArtist = {
  artistName: "",
  artistDOB: 0,
};

const defaultPainting = {
  paintingName: "",
  paintingURL: "",
  artistID: 0,
};

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

const CreateItemForm = () => {
  const [artist, setArtist] = useState({});
  const [painting, setPainting] = useState({});

  const { artistName, artistDOB } = artist;
  console.log(artist);

  const onChangeArtist = (event) => {
    const { name, value } = event.target;
    setArtist({ ...artist, [name]: value });
  };
  const onChangePainting = (event) => {
    const { name, value } = event.target;
    setArtist({ ...painting, [name]: value });
  };

  const handleArtistSubmit = async (event) => {
    console.log("this is reachable");
    const artistPayload = JSON.stringify(artist);

    console.log(artistPayload);

    event.preventDefault();

    await axios
      .post("http://localhost:8080/artists", artistPayload)
      .then((response) => console.log(response.json()))
      .catch((error) => {
        console.error(error);
      });

    setArtist(defaultArtist);
  };

  const handlePaintingSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="create-item-wrapper">
      <h1 className="create-header">{createText}</h1>
      <form
        className="artist-form-container input-group"
        onSubmit={handleArtistSubmit}
      >
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
          type="text"
          displaytext={artistDOBText}
          name="artistDOB"
          onChange={onChangeArtist}
        />
        <button
          type="submit"
          className="btn btn-secondary submit"
          // onSubmit={() => handleArtistSubmit()}
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
          type="submit"
          className="btn btn-secondary submit"
          onSubmit={handlePaintingSubmit}
        >
          Submit a painting
        </button>
      </form>
    </div>
  );
};

export default CreateItemForm;
