import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { CREATE_MOVIE } from "../../mutations/movie/create-movie";
import "react-datepicker/dist/react-datepicker.css";
import "./movie-modal.scss";
import { GET_ALL_MOVIES } from "../../queries/movie/get-movies";

function MovieModal(props: any) {
  // Use react hook to create a movie, then update apollo cache so with created item
  const [createMovie] = useMutation(CREATE_MOVIE, {
    update: (cache, { data: { createMovie } }) => {
      // Get existing data from cache
      const data: any = cache.readQuery({ query: GET_ALL_MOVIES });

      // Update cache with new item and existing data
      cache.writeQuery({
        query: GET_ALL_MOVIES,
        data: { getAllMovies: [...data.getAllMovies, createMovie] },
      });
    },
  });

  const [validated, setValidated] = useState(false);
  const [movieName, setMovieName] = useState<string>("");
  const [movieDuration, setMovieDuration] = useState<string>("");
  const [movieActors, setMovieActors] = useState<string>("");
  const [movieReleaseDate, setMovieReleaseDate] = useState<any | null>(
    new Date()
  );

  const handleAddMovie = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    // Fetch data via graphQL
    createMovie({
      variables: {
        name: movieName,
        duration: movieDuration,
        actors: movieActors,
        releaseDate: movieReleaseDate,
        rating: 0,
      },
    }).then((res) => {
      alert("movie created");
      props.handleClose();
      console.log(res);
    });
  };

  return (
    <div className="MovieModal">
      <Modal animation={false} show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated}>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="RegisterFirstNameInput">
                <Form.Label>Movie name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Movie name"
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="RegisterFirstNameInput">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Movie duration"
                  value={movieDuration}
                  onChange={(e) => setMovieDuration(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid duration
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="RegisterFirstNameInput">
                <Form.Label>Release date</Form.Label>
                <DatePicker
                  className="form-control"
                  selected={movieReleaseDate}
                  onChange={(date) => setMovieReleaseDate(date)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid date
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="RegisterFirstNameInput">
                <Form.Label>Actors</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Actors"
                  value={movieActors}
                  onChange={(e) => setMovieActors(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid duration
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MovieModal;
