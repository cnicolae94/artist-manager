import { useParams } from "react-router-dom";
import "./painting-album.styles.css";
import { useContext, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import PaintingCard from "../painting-card/painting-card.component";
import { ViewUpdateContext } from "../../contexts/view-update-context";
import UpdateViewForm from "../update-view-form/update-view-form.component";
import { CurrentPaintingContext } from "../../contexts/currentpainting-context";

const PaintingAlbum = () => {
  const artistId = useParams().id;
  const [isLoading, setisLoading] = useState(true);
  const { isViewUpdateOpen } = useContext(ViewUpdateContext);
  const { currentPainting } = useContext(CurrentPaintingContext);

  const [paintingsList, setPaintingsList] = useState(async () => {
    const axiosUrl = `http://localhost:8080/paintings/${artistId}`;
    const fetchPaintings = async () => {
      await axios
        .get(axiosUrl)
        .then((response) => {
          if (response.data) {
            setPaintingsList(response.data);
            setisLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    return fetchPaintings();
  });

  return (
    <div className="painting-album-with-update">
      {isViewUpdateOpen ? <UpdateViewForm item={currentPainting} /> : null}
      <div className="painting-album-container">
        {isLoading ? (
          <Spinner />
        ) : (
          paintingsList.map((painting, index) => (
            <PaintingCard key={index} painting={painting} />
          ))
        )}
      </div>
    </div>
  );
};

export default PaintingAlbum;
