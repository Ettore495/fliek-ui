import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { UPSERT_MOVIE } from "../../graphql/mutations/movie/upsert-movie";
import "react-datepicker/dist/react-datepicker.css";
import "./movie-modal.scss";
import { GET_ALL_MOVIES } from "../../graphql/queries/movie/get-movies";
import { IMovie } from "../../models/IMovie";
import Cookies from "js-cookie";

function MovieModal(props: {
  movie?: IMovie;
  show: boolean;
  handleClose: Function;
}) {
  const isUpdating = props.movie?.id;

  const [filter, setFilter] = useState<string>(
    Cookies.get("movie_filter") || "name"
  );
  const [direction, setDirection] = useState<string>(
    Cookies.get("sort_direction") || "asc"
  );

  // Use react hook to create a movie, then update apollo cache so with created item
  const [upsertMovie] = useMutation(UPSERT_MOVIE, {
    update: (cache, { data: { upsertMovie } }) => {
      // Set filter varibles
      setFilter(Cookies.get("movie_filter") || "name");
      setDirection(Cookies.get("sort_direction") || "asc");

      const vars = {
        filter: filter,
        sortDirection: direction,
        userId: "604bc6e57a7e0f143c3d33e2",
      };
      // Get existing data from cache
      const data: any = cache.readQuery({
        query: GET_ALL_MOVIES,
        variables: vars,
        returnPartialData: true,
      });
      console.log("here", data, upsertMovie);
      // Update cache with new item and existing data
      cache.writeQuery({
        query: GET_ALL_MOVIES,
        variables: vars,
        data: {
          getAllMovies: [...data.getAllMovies, !isUpdating ?? upsertMovie],
          getRatings: [...data.getRatings],
        },
      });
    },
  });

  // Reactive properties
  const [validated, setValidated] = useState(false);
  const [movieId, setMovieId] = useState<string>("");
  const [movieName, setMovieName] = useState<string>("");
  const [movieDuration, setMovieDuration] = useState<string>("");
  const [movieActors, setMovieActors] = useState<string>("");
  const [movieReleaseDate, setMovieReleaseDate] = useState<any | string>(
    new Date()
  );

  // When props are passed, sync them with props and rerender
  // Props setstate should be passed into this component instead
  useEffect(() => {
    setMovieId(props.movie?.id || "");
    setMovieName(props.movie?.name || "");
    setMovieDuration(props.movie?.duration || "");
    setMovieActors(props.movie?.actors || "");
    setMovieReleaseDate(props.movie?.releaseDate || "");
  }, [props]);

  // Add a movie
  const handleAddMovie = (event: any) => {
    const movieForm: HTMLFormElement | null = document.querySelector(
      ".movie-edit-form"
    );
    movieForm?.reportValidity();
    if (movieForm?.checkValidity() === false) {
      event.stopPropagation();
      setValidated(false);
      return;
    }

    setValidated(true);

    // Add movie via graphQL
    upsertMovie({
      variables: {
        id: movieId,
        name: movieName,
        duration: movieDuration,
        actors: movieActors,
        releaseDate: movieReleaseDate,
        rating: 0,
      },
    }).then((res) => {
      // Close modal
      props.handleClose();
      console.log(res);
    });
  };

  return (
    <div className="MovieModal">
      <Modal
        animation={false}
        key={movieId}
        show={props.show}
        onHide={props.handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{isUpdating ? "Edit movie" : "Add movie"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} className="movie-edit-form">
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
                  selected={
                    movieReleaseDate ? new Date(movieReleaseDate) : null
                  }
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
