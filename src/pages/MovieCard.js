import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>description</Card.Text>
          <Link to={`/movies/${movie.id}`}>
            <Button variant="primary">details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
