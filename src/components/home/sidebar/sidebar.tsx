import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Logo from "../../shared/logo/logo";
import { ReactComponent as FilmIcon } from "../../../assets/icons/film.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import MovieModal from "../../movie-modal/movie-modal";
import { IMovie } from "../../../models/IMovie";

function Sidebar() {
  const [showMovieModal, setShowMovieModal] = useState<boolean>(false);

  const newMovie: IMovie = {
    id: "",
    name: "",
    duration: "",
    releaseDate: new Date(),
    actors: "",
    averageRating: 1,
  };

  const handleClose = () => {
    setShowMovieModal(false);
  };

  return (
    <div className="Sidebar">
      <div className="header">
        <Logo />
      </div>
      <p className="menu-heading">MENU</p>
      <ListGroup variant="flush">
        <NavLink to="/home/movies" activeClassName="selected">
          <ListGroup.Item action>
            <div className="item-wrapper">
              <FilmIcon />
              All movies
            </div>
          </ListGroup.Item>
        </NavLink>
        {/* <NavLink to="/home/my-collection" activeClassName="selected">
          <ListGroup.Item action>
            <div className="item-wrapper">
              <DatabaseIcon />
              My collection
            </div>
          </ListGroup.Item>
        </NavLink> */}
        <Link
          className="flex-grow-1"
          to="#"
          onClick={() => {
            setShowMovieModal(true);
          }}
        >
          <ListGroup.Item action>
            <div className="item-wrapper">
              <PlusIcon />
              Add movie
            </div>
          </ListGroup.Item>
        </Link>
        <Link className="logout-button" to="/sign-in">
          <ListGroup.Item action>
            <div className="item-wrapper">
              <LogoutIcon />
              Logout
            </div>
          </ListGroup.Item>
        </Link>
      </ListGroup>
      <MovieModal
        movie={newMovie}
        show={showMovieModal}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Sidebar;
