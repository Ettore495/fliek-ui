import React from "react";
import "./home.scss";
import { Route } from "react-router-dom";
import Movies from "../movies/movies";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import { useSubscription } from "@apollo/client";
import { DELETE_MOVIE_SUBSCRIPTION } from "../../graphql/subscriptions/movie/delete-movie";
import { UPSERT_MOVIE_SUBSCRIPTION } from "../../graphql/subscriptions/movie/upsert-movie";
import SubscriptionAlert from "../shared/subscription-alert/movie-subscription-alert";

function Home() {
  const {
    data: deleteSubscribeData,
    loading: deleteSubscribeLoading,
  } = useSubscription(DELETE_MOVIE_SUBSCRIPTION);
  const {
    data: upsertSubscribeData,
    loading: upsertSubscribeLoading,
  } = useSubscription(UPSERT_MOVIE_SUBSCRIPTION);

  const renderSubscriptionALert = () => {
    if (!deleteSubscribeLoading) {
      return (
        <SubscriptionAlert
          data={deleteSubscribeData?.movieDeleted}
          loading={deleteSubscribeLoading}
          heading="Movie deleted"
          action="deleted"
        />
      );
    }

    if (!upsertSubscribeLoading) {
      return (
        <SubscriptionAlert
          data={upsertSubscribeData?.movieCreated}
          loading={upsertSubscribeLoading}
          heading={
            upsertSubscribeData?.movieCreated.update
              ? "Movie updated"
              : "Movie created"
          }
          action={
            upsertSubscribeData?.movieCreated.update ? "updated" : "created"
          }
        />
      );
    }
  };

  return (
    <div className="Home">
      <div className="home-container">
        {renderSubscriptionALert()}
        <header>
          <Header />
        </header>
        <Sidebar />
        <main>
          <Route path="/home/movies" component={Movies} />
        </main>
      </div>
    </div>
  );
}

export default Home;
