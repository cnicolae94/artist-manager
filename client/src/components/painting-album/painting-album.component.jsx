import { useParams } from "react-router-dom";
import "./painting-album.styles.css";
import { useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import PaintingCard from "../painting-card/painting-card.component";

const PaintingAlbum = () => {
  const artistId = useParams().id;
  const [isLoading, setisLoading] = useState(true);

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
    <div className="painting-album-container">
      {isLoading ? (
        <Spinner />
      ) : (
        paintingsList.map((painting, index) => (
          <PaintingCard key={index} painting={painting} />
        ))
      )}
    </div>
  );
};

export default PaintingAlbum;
