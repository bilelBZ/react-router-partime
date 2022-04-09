import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
function MovieDetails({ movies }) {
  let { id } = useParams();
  let navigate = useNavigate();
  return (
    <div>
      {movies
        .filter((movie) => movie.id == id)
        .map((el) => (
          <div>
            <span>details : {el.title}</span>
            <Button
              className="btn btn-danger"
              onClick={() => navigate("/movies")}
            >
              go back
            </Button>
            <Card>
              <Card.Body>{el.description}</Card.Body>
            </Card>
            <iframe
              width="727"
              height="409"
              src={el.trailer}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}
    </div>
  );
}

export default MovieDetails;
