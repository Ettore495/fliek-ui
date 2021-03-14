import { MovieFilter } from "../../../models/MovieFilter";
import Cookies from "js-cookie";

interface IProps {
  refetch: Function;
  setFilter: Function;
  setDirection: Function;
}

function MoviesTableHeader(props: IProps) {
  const handleFilterClick = (filter: string) => {
    const direction = Cookies.get("sort_direction") === "asc" ? "desc" : "asc";
    // Set Movie filter cookies
    Cookies.set("sort_direction", direction);
    Cookies.set("movie_filter", filter);

    // This will trigger rerender on parent component and fetch data
    props.setFilter(filter);
    props.setDirection(direction);
  };

  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.NAME);
          }}
        >
          Name
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.RELEASE_DATE);
          }}
        >
          Release date
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.DURATION);
          }}
        >
          Duration
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.ACTORS);
          }}
        >
          Actors
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.AVERAGE_RATING);
          }}
        >
          Avg. rating
        </th>
        <th>My rating</th>
      </tr>
    </thead>
  );
}

export default MoviesTableHeader;
