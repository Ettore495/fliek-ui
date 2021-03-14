import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_MOVIES } from "../../../queries/movie/get-movies";

function MoviesTableHeader() {
  const [movieFilter, setMovieFilter] = useState<string>("name");
  const [getMovies, { loading, data }] = useLazyQuery(GET_ALL_MOVIES);

  const handleFilterClick = (filter: string) => {
    getMovies();
    console.log(filter, data);
  };

  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            handleFilterClick("name");
          }}
        >
          Name
        </th>
        <th>Release date</th>
        <th>Duration</th>
        <th>Actors</th>
        <th>Avg. rating</th>
        <th>My rating</th>
      </tr>
    </thead>
  );
}

export default MoviesTableHeader;
