import { Card } from "react-bootstrap";

const landingImg =
  "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80";
const Introduction = () => {
  return (
    <Card>
      <Card.Header>Welcome to the artist database</Card.Header>
      <Card.Img
        style={{ maxHeight: "300px", objectFit: "cover" }}
        src={landingImg}
      />
      <Card.Body className="homepage-card-text">
        To start, you can browse the Album to see all the artists currently in
        the database.
      </Card.Body>
      <Card.Body className="homepage-card-text">
        On the Album page you can see the paintings for each artist, add a
        painting for them, update the data or delete an artist with just a click
        of a button.
      </Card.Body>
      <Card.Body className="homepage-card-text">
        You can add a new artist by going to the '/create' page and filling out
        the form.
      </Card.Body>
      <Card.Body className="homepage-card-text">
        You can search any painting or artist by name by using the '/search'
        page.
      </Card.Body>
      <Card.Body className="homepage-card-text">
        In this project, we've covered most, if not all of the CRUD operations.
      </Card.Body>
      <Card.Body className="homepage-card-text">
        The website has been created using npx create-react app,
        react-router-dom bootstrap-react library for front end, node.js,
        sequelize with a postgres backend by Claudia Nicolae (An 3 Suplimentar).
      </Card.Body>
    </Card>
  );
};

export default Introduction;
