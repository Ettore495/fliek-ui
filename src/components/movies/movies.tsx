import React from "react";
import { ReactComponent as DotsVerticalIcon } from "../../assets/icons/dots-vertical.svg";
import "./movies.scss";
import { Dropdown, Table } from "react-bootstrap";

function Movies() {
  return (
    <div className="Movies">
      <Table borderless hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release date</th>
            <th>Duration</th>
            <th>Actors</th>
            <th>Average user rating</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Dropdown>
                <Dropdown.Toggle as="div" className="options-dropdown">
                  <DotsVerticalIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Movies;
