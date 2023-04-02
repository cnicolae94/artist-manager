import { Button, Card, Form } from "react-bootstrap";
import "./_form.styles.css";
import { useState } from "react";

const SearchItemForm = () => {
  const [searchArtistTerm, setSearchArtistTerm] = useState("");
  const [searchPaintingTerm, setSearchPaintingTerm] = useState("");

  const handleArtistInputChange = (event) => {
    setSearchArtistTerm(event.target.value);
  };

  const handlePaintingInputChange = (event) => {
    setSearchPaintingTerm(event.target.value);
  };

  const handleFetch = () => {};

  return (
    <Card>
      <Card.Header>Search an artist or painting by name</Card.Header>
      <Card.Body>
        <Form>
          <div className="row">
            <Form.Group className="artist-label col">
              <Form.Label>Artist Search</Form.Label>
              <Form.Control
                value={searchArtistTerm}
                onChange={handleArtistInputChange}
                name="searchArtistTerm"
                type="text"
              />
            </Form.Group>
            <Form.Group className="painting-label col">
              <Form.Label>Painting Search</Form.Label>
              <Form.Control
                value={searchPaintingTerm}
                onChange={handlePaintingInputChange}
                name="searchPaintingTerm"
                type="text"
              />
            </Form.Group>
          </div>
          <Button className="col">Search</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default SearchItemForm;
