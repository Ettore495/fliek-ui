import { useSubscription } from "@apollo/client";
import React from "react";
import { UPSERT_MOVIE_SUBSCRIPTION } from "../../../graphql/subscriptions/movie/upsert-movie";

function MovieSubscription() {
  const { data, loading } = useSubscription(UPSERT_MOVIE_SUBSCRIPTION);
  return <h4>New movie added: {!loading && data.movieCreated.name}</h4>;
}

export default MovieSubscription;
