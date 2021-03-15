import React, { Component } from "react";
import "./home.scss";
import { Route } from "react-router-dom";
import Movies from "../movies/movies";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import MovieSubscription from "../movies/movie-subscription/movie-upsert-subscription";
import MovieDeleteSubscription from "../movies/movie-subscription/movie-delete-subscription";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-container">
          <MovieSubscription />
          <MovieDeleteSubscription />
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
}
