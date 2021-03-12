import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation CreateMovie(
    $name: String!
    $duration: String!
    $actors: String!
    $releaseDate: String!
    $rating: Number
  ) {
    createMovie(
      name: $name
      duration: $duration
      actors: $actors
      releaseDate: $releaseDate
      rating: $rating
    ) {
      name
      duration
      actors
      releaseDate
      rating
    }
  }
`;
