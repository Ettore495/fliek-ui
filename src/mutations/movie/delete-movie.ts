import { gql } from "@apollo/client";

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: String!) {
    deleteMovie(id: $id) {
      id
      deletedCount
    }
  }
`;
