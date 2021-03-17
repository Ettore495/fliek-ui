import React, { useState } from "react";
import Cookies from "js-cookie";
import { ReactComponent as DotsVerticalIcon } from "../../assets/icons/dots-vertical.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import "./movies.scss";
import { Dropdown, Table } from "react-bootstrap";
import { GET_ALL_MOVIES } from "../../graphql/queries/movie/get-movies";
import { useMutation, useQuery } from "@apollo/client";
import { IMovie } from "../../models/IMovie";
import { IRating } from "../../models/IRating";
import MovieModal from "../movie-modal/movie-modal";
import { DELETE_MOVIE } from "../../graphql/mutations/movie/delete-movie";
import ReactStars from "react-rating-stars-component";
import { UPSERT_RATING } from "../../graphql/mutations/rating/upsert-rating";
import MoviesTableHeader from "./movies-table-header/movies-table-header";
import { getUserProfile } from "../../services/security-service";

function Movies() {
  const [filter, setFilter] = useState<string>(
    Cookies.get("movie_filter") || "name"
  );
  const [direction, setDirection] = useState<string>(
    Cookies.get("sort_direction") || "asc"
  );
  const { loading, data, refetch } = useQuery(GET_ALL_MOVIES, {
    variables: {
      filter: filter,
      sortDirection: direction,
      userId: getUserProfile().id,
    },
  });

  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    update: () => {
      // Get existing data from cache
      refetch();
    },
  });

  const [upsertRating] = useMutation(UPSERT_RATING);

  const [selectedMovie, setSelectedMovie] = useState<IMovie | undefined>(
    undefined
  );
  const [showMovieModal, setShowMovieModal] = useState<boolean>(false);

  const handleSelectMovie = (movie: IMovie) => {
    setSelectedMovie(movie);
    setShowMovieModal(true);
  };

  const handleDeleteMovie = (movie: IMovie) => {
    deleteMovie({
      variables: {
        id: movie.id,
      },
    }).then((result) => {
      console.log(result);
    });
  };

  const getMovieRating = (movie: IMovie): IRating => {
    const rating = data.getRatings.filter(
      (rating: IRating) => rating.movieId === movie.id
    )[0];
    return rating ? rating.rating : 0;
  };

  const ratingChanged = (rating: number) => {
    upsertRating({
      variables: {
        userId: getUserProfile().id,
        movieId: selectedMovie?.id,
        rating: rating,
      },
    }).catch((error: any) => {
      alert(error.message);
    });
  };

  return (
    <div className="Movies">
      <MovieModal
        movie={selectedMovie}
        show={showMovieModal}
        handleClose={() => {
          setShowMovieModal(false);
        }}
      />
      <Table borderless hover>
        <MoviesTableHeader
          filter={filter}
          direction={direction}
          setFilter={setFilter}
          setDirection={setDirection}
          refetch={refetch}
        />
        <tbody>
          {data &&
            !loading &&
            data.getAllMovies.map((movie: IMovie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.actors}</td>
                  <td>{movie.averageRating}</td>
                  <td
                    onMouseEnter={() => {
                      setSelectedMovie(movie);
                    }}
                  >
                    <ReactStars
                      count={5}
                      value={getMovieRating(movie)}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle as="div" className="options-dropdown">
                        <DotsVerticalIcon />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => {
                            handleSelectMovie(movie);
                          }}
                        >
                          <EditIcon />
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            handleDeleteMovie(movie);
                          }}
                        >
                          <TrashIcon />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default Movies;
