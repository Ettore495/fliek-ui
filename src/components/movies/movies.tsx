import React from "react";
import { ReactComponent as DotsVerticalIcon } from "../../assets/icons/dots-vertical.svg";
import "./movies.scss";
import { Dropdown, Table } from "react-bootstrap";
import { GET_ALL_MOVIES } from "../../queries/movie/get-movies";
import { useQuery } from "@apollo/client";

function Movies() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);
  if (error) console.log(error);
  if (loading) console.log("loading");

  return (
    <div className="Movies">
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
            data.getAllMovies.map((movie: any) => {
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
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
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
