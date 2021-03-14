import { gql } from "@apollo/client";

export const GET_ALL_MOVIES = gql`
  query GetAllMovies($filter: String, $userId: String!) {
    getAllMovies(filter: $filter) {
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
