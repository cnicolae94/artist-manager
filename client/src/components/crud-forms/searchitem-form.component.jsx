import { Card, Form } from "react-bootstrap";
import "./_form.styles.css";

const SearchItemForm = () => {
  return (
    <Card>
      <Card.Header>Search an artist or painting by name</Card.Header>
      <Card.Body>
        <Form>
          <div className="row">
            <Form.Group className="artist-label col">
              <Form.Label>Artist Search</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="painting-label col">
              <Form.Label>Painting Search</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};
export default SearchItemForm;
