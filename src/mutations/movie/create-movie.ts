import { gql } from "@apollo/client";

export const CREATE_MOVIE = gql`
  mutation CreateMovie(
    $name: String!
    $duration: String!
    $actors: String!
    $releaseDate: String!
    $rating: Int
  ) {
    createMovie(
      name: $name
      duration: $duration
      actors: $actors
      releaseDate: $releaseDate
      rating: $rating
    ) {
      id
      name
      duration
      actors
      releaseDate
      rating
    }
  }
`;
