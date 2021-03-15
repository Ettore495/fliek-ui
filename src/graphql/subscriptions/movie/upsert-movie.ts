import { gql } from "@apollo/client";

export const UPSERT_MOVIE_SUBSCRIPTION = gql`
  subscription {
    movieCreated {
      id
      name
    }
  }
`;
