import { Button, Card, Form, Spinner } from "react-bootstrap";
import "./_form.styles.css";
import { useState } from "react";
import axios from "axios";
import ArtistCard from "../artist-card/artist-card.component";
import PaintingCard from "../painting-card/painting-card.component";

const urlArtistSearch = "http://localhost:8080/search-artists?name=";
const urlPaintingSearch = "http://localhost:8080/search-paintings?name=";

const SearchItemForm = () => {
  const [searchArtistTerm, setSearchArtistTerm] = useState("");
  const [searchPaintingTerm, setSearchPaintingTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [paintings, setPaintings] = useState([]);

  const handleArtistInputChange = (event) => {
    setSearchArtistTerm(event.target.value);
  };

  const handlePaintingInputChange = (event) => {
    setSearchPaintingTerm(event.target.value);
  };

  // console.log(searchArtistTerm);
  // console.log(searchPaintingTerm);

  const handleFetchArtists = async () => {
    try {
      setSearchPaintingTerm("");
      setPaintings([]);
      setIsLoading(true);
      const axiosArtistUrl = `${urlArtistSearch}${searchArtistTerm}`;
      const response = await axios.get(axiosArtistUrl);
      setArtists(response.data);
      if (!artists) {
        window.alert("No artists matched in the databse. Please try again.");
        setSearchArtistTerm("");
      }
      setSearchArtistTerm("");
      setIsLoading(false);
    } catch (error) {
      window.alert(error.message + " CODE: " + error.code);
      setSearchArtistTerm("");
      setIsLoading(false);
    }
  };

  const handleFetchPaintings = async () => {
    try {
      setSearchArtistTerm("");
      setArtists([]);
      setIsLoading(true);
      const axiosPaintingUrl = `${urlPaintingSearch}${searchPaintingTerm}`;
      const response = await axios.get(axiosPaintingUrl);
      setPaintings(response.data);
      if (paintings.length === 0) {
        window.alert("No paintings matched in the databse. Please try again.");
        setSearchPaintingTerm("");
      }
      setSearchPaintingTerm("");
      setIsLoading(false);
    } catch (error) {
      window.alert(error.message + " CODE: " + error.code);
      setSearchPaintingTerm("");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card>
        <Card.Header>Search an artist or painting by name</Card.Header>
        <Card.Body>
          <Form>
            <div className="row">
              <Form.Group className="artist-label col">
                <Form.Label>Artist Search</Form.Label>
                <Form.Control
                  value={searchArtistTerm}
                  placeholder="Artist name goes here"
                  onChange={handleArtistInputChange}
                  name="searchArtistTerm"
                  type="text"
                />
              </Form.Group>
              <Form.Group className="painting-label col">
                <Form.Label>Painting Search</Form.Label>
                <Form.Control
                  value={searchPaintingTerm}
                  placeholder="Painting name goes here"
                  onChange={handlePaintingInputChange}
                  name="searchPaintingTerm"
                  type="text"
                />
              </Form.Group>
            </div>
            <div className="row btn-row">
              <Button className="col btn-search-1" onClick={handleFetchArtists}>
                Search artist
              </Button>
              <Button
                className="col btn-search-2"
                onClick={handleFetchPaintings}
              >
                Search painting
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      {artists
        ? artists.map((artist) => (
            <ArtistCard key={artist.artistId} artist={artist} />
          ))
        : null}
      {paintings
        ? paintings.map((painting) => <PaintingCard painting={painting} />)
        : null}
      {isLoading ? <Spinner /> : null}
    </>
  );
};
export default SearchItemForm;
