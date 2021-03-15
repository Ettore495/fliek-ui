import { gql } from "@apollo/client";

export const UPSERT_RATING = gql`
  mutation UpsertRating($userId: String!, $movieId: String!, $rating: Int!) {
    upsertRating(userId: $userId, movieId: $movieId, rating: $rating) {
      userId
      movieId
      rating
    }
  }
`;
