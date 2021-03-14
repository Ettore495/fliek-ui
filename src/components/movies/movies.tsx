import React, { useState } from "react";
import { ReactComponent as DotsVerticalIcon } from "../../assets/icons/dots-vertical.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/trash.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import "./movies.scss";
import { Dropdown, Table } from "react-bootstrap";
import { GET_ALL_MOVIES } from "../../queries/movie/get-movies";
import { useMutation, useQuery } from "@apollo/client";
import { IMovie } from "../../types/IMovie";
import MovieModal from "../movie-modal/movie-modal";
import { DELETE_MOVIE } from "../../mutations/movie/delete-movie";

function Movies() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);
  if (error) console.log(error);
  if (loading) console.log("loading");

  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    update: (cache, { data: { deleteMovie } }) => {
      // Get existing data from cache
      const movies: any = cache.readQuery({ query: GET_ALL_MOVIES });
      // Filter deleted movie out of array
      const newMovies = movies.getAllMovies.filter(
        (m: IMovie) => m.id !== deleteMovie.id
      );
      // Update cache with new movies
      cache.writeQuery({
        query: GET_ALL_MOVIES,
        data: {
          getAllMovies: newMovies,
        },
      });
    },
  });

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
      alert("movie was deleted");
      console.log(result);
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Release date</th>
            <th>Duration</th>
            <th>Actors</th>
            <th>rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.getAllMovies.map((movie: IMovie) => {
              return (
                <tr key={movie.id}>
                  <td>{movie.name}</td>
                  <td>{movie.releaseDate}</td>
                  <td>{movie.duration}</td>
                  <td>{movie.actors}</td>
                  <td>{movie.rating}</td>
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
