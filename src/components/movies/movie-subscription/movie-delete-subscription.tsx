import { useSubscription } from "@apollo/client";
import React, { useEffect, useState } from "react";
import "./movie-subscription.scss";
import { Toast } from "react-bootstrap";
import { DELETE_MOVIE_SUBSCRIPTION } from "../../../graphql/subscriptions/movie/delete-movie";

function MovieDeleteSubscription() {
  const { data, loading } = useSubscription(DELETE_MOVIE_SUBSCRIPTION);

  useEffect(() => {
    const element: HTMLElement | null = document.querySelector(".toast-delete");
    if (!loading && element) {
      element.style.display = "block";
      var timer = setTimeout(() => {
        element.style.display = "none";
      }, 2000);
    }
    return () => clearTimeout(timer);
  });

  return (
    <div className="toast-component toast-delete">
      <Toast className="subscription-notification">
        <Toast.Header>
          <strong className="mr-auto">Delete</strong>
        </Toast.Header>
        <Toast.Body>{`User deleted movie ${
          !loading ? data.movieDeleted.name : "no data"
        }`}</Toast.Body>
      </Toast>
    </div>
  );
}

export default MovieDeleteSubscription;
