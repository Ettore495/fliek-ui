import React, { useEffect } from "react";
import "./movie-subscription.scss";
import { Toast } from "react-bootstrap";
import { IMovieSubscriptionData } from "../../../models/IMovieSubscriptionData";

interface Props {
  data: IMovieSubscriptionData;
  loading: boolean;
  heading: string;
  action: string;
}

function SubscriptionAlert(props: Props) {
  useEffect(() => {
    const element: HTMLElement | null = document.querySelector(
      `.toast-${props.action}`
    );
    console.log(element);
    if (!props.loading && element) {
      element.style.display = "block";
      var timer = setTimeout(() => {
        element.style.display = "none";
      }, 2000);
    }
    return () => clearTimeout(timer);
  });

  return (
    <div className={`toast-component toast-${props.action}`}>
      <Toast className="subscription-notification">
        <Toast.Header>
          <strong className="mr-auto">{props.heading}</strong>
        </Toast.Header>
        <Toast.Body>
          {!props.loading
            ? `${props.data.user.username} ${props.action} movie: ${props.data.movie.name}`
            : ""}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default SubscriptionAlert;
