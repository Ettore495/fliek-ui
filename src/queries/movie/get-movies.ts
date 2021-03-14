import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query GetAllMovies(
    $filter: String
    $sortDirection: String
    $userId: String!
  ) {
    getAllMovies(filter: $filter, sortDirection: $sortDirection) {
      id
      name
      duration
      releaseDate
      actors
      averageRating
    }

    getRatings(userId: $userId) {
      userId
      movieId
      rating
    }
  }
`;
