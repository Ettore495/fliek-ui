import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Logo from "../../shared/logo/logo";
import { ReactComponent as FilmIcon } from "../../../assets/icons/film.svg";
import { ReactComponent as DatabaseIcon } from "../../../assets/icons/database.svg";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
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
        <NavLink to="/movies/add" activeClassName="selected">
          <ListGroup.Item action>
            <div className="item-wrapper">
              <PlusIcon />
              Add movie
            </div>
          </ListGroup.Item>
        </NavLink>
      </ListGroup>
    </div>
  );
}

export default Sidebar;
