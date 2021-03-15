import { gql } from "@apollo/client";

export const UPSERT_MOVIE = gql`
  mutation UpsertMovie(
    $id: String
    $name: String!
    $duration: String!
    $actors: String!
    $releaseDate: String!
  ) {
    upsertMovie(
      id: $id
      name: $name
      duration: $duration
      actors: $actors
      releaseDate: $releaseDate
    ) {
      id
      name
      duration
      actors
      releaseDate
      averageRating
    }
  }
`;
