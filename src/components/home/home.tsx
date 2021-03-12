import React from "react";
import "./home.scss";
import { Route } from "react-router-dom";
import Movies from "../movies/movies";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";

function Home() {
  return (
    <div className="Home">
      <div className="home-container">
        <header>
          <Header />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Route path="/home/movies" component={Movies} />
        </main>
      </div>
    </div>
  );
}

export default Home;
