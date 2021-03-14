import { MovieFilter } from "../../../models/MovieFilter";

interface IProps {
  refetch: Function;
}

function MoviesTableHeader(props: IProps) {
  const handleFilterClick = (filter: string) => {
    document.cookie = `movie_filter=${filter};max-age=604800;`;
    props.refetch({
      // Apollo bug: refetch does not include updated varibles :(
      varibles: { filter: filter, userId: "604bc6e57a7e0f143c3d33e2" },
    });
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
