import FormInput from "./_form-input.component";
import {
  artistIdText,
  createAPainting,
  paintingImageUrlText,
  paintingNameText,
} from "../../assets/headers";

const AddPaintingModal = () => {
  const [painting, setPainting] = useState({});
  const [message, setMessage] = useState("");
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

  return (
    <>
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
    </>
  );
};

export default AddPaintingModal;
