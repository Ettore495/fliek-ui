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

    getRatings(userId: "604bc6e57a7e0f143c3d33e2") {
      userId
      rating
      movieId
    }
  }
`;
