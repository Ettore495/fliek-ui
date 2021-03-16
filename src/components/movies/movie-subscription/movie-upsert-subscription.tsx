import { useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./movie-subscription.scss";
import { Toast } from "react-bootstrap";
import { UPSERT_MOVIE_SUBSCRIPTION } from "../../../graphql/subscriptions/movie/upsert-movie";

function MovieSubscription() {
  const { data, loading } = useSubscription(UPSERT_MOVIE_SUBSCRIPTION);

  useEffect(() => {
    const element: HTMLElement | null = document.querySelector(
      ".toast-component"
    );
    if (!loading && element) {
      element.style.display = "block";
      var timer = setTimeout(() => {
        element.style.display = "none";
      }, 2000);
    }
    return () => clearTimeout(timer);
  });

  return (
    <div className="toast-component">
      <Toast className="subscription-notification">
        <Toast.Header>
          <strong className="mr-auto">Upsert</strong>
        </Toast.Header>
        <Toast.Body>
          {!loading
            ? `${data.movieCreated.user.username} added movie: ${data.movieCreated.movie.name}`
            : ""}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default MovieSubscription;
