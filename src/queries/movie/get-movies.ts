import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  {
    getAllMovies {
      id
      name
      duration
      releaseDate
      actors
      averageRating
    }
  }
`;
