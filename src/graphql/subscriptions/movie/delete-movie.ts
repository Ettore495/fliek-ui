import { gql } from "@apollo/client";

export const DELETE_MOVIE_SUBSCRIPTION = gql`
  subscription {
    movieDeleted {
      movie {
        name
      }
      user {
        username
      }
      update
    }
  }
`;
