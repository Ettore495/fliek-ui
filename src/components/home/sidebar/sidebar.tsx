import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Logo from "../../shared/logo/logo";
import { ReactComponent as FilmIcon } from "../../../assets/icons/film.svg";
import { ReactComponent as DatabaseIcon } from "../../../assets/icons/database.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import MovieModal from "../../movie-modal/movie-modal";

export default class Sidebar extends Component<
  {},
  { showMovieModal: boolean }
> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      showMovieModal: false,
    };
  }

  render() {
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
          <NavLink to="/home/my-collection" activeClassName="selected">
            <ListGroup.Item action>
              <div className="item-wrapper">
                <DatabaseIcon />
                My collection
              </div>
            </ListGroup.Item>
          </NavLink>
          <Link to="#" onClick={this.showMovieModal}>
            <ListGroup.Item action>
              <div className="item-wrapper">
                <PlusIcon />
                Add movie
              </div>
            </ListGroup.Item>
          </Link>
        </ListGroup>

        <MovieModal
          show={this.state.showMovieModal}
          handleClose={this.handleClose}
        />
      </div>
    );
  }

  showMovieModal = () => {
    this.setState({
      showMovieModal: true,
    });
  };

  handleClose = () => {
    this.setState({
      showMovieModal: false,
    });
  };
}
