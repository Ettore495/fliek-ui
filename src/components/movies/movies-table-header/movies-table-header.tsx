import { MovieFilter } from "../../../models/MovieFilter";
import Cookies from "js-cookie";
import SortDirectionIcons from "../sort-direction-icons/sort-direction-icons";

interface IProps {
  refetch: Function;
  setFilter: Function;
  setDirection: Function;
  direction: string;
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
          <div>
            Name
            <SortDirectionIcons sortDirection={props.direction} />
          </div>
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.RELEASE_DATE);
          }}
        >
          <div>
            Release date
            <SortDirectionIcons sortDirection={props.direction} />
          </div>
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.DURATION);
          }}
        >
          <div>
            Duration
            <SortDirectionIcons sortDirection={props.direction} />
          </div>
        </th>
        <th
          onClick={() => {
            handleFilterClick(MovieFilter.ACTORS);
          }}
        >
          <div>
            Actors
            <SortDirectionIcons sortDirection={props.direction} />
          </div>
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
