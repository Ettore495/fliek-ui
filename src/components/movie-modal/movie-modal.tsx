import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./movie-modal.scss";

export default class MovieModal extends Component<
  {
    show: boolean;
    handleClose: Function;
  },
  {
    startDate: Date;
  }
> {
  constructor(props: Readonly<{ show: boolean; handleClose: Function }>) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  render() {
    return (
      <div className="MovieModal">
        <Modal
          animation={false}
          show={this.props.show}
          onHide={this.props.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="inputFirstName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="inputMovieName"
                  className="form-control"
                  placeholder="Minimum 2 characters"
                  required
                />
                {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="inputReleaseDate"
                  className="form-label d-block"
                >
                  Release date
                </label>
                <DatePicker
                  className="form-control"
                  selected={this.state.startDate}
                  onChange={(date) => this.setStartDate(date)}
                />
                {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Duration
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  className="form-control"
                  required
                  placeholder="Must be a valid email"
                  autoFocus
                />
                {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="inputMovieDuration" className="form-label">
                  Actors
                </label>
                <input
                  type="text"
                  id="inputMovieDuration"
                  className="form-control"
                  placeholder="Minimum 1 characters"
                  required
                />
                {/* <div id="inputFirstName" className="form-text">We'll never share your email with anyone else.</div> */}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.props.handleClose()}
            >
              Close
            </Button>
            <Button variant="primary" onClick={() => this.props.handleClose()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  setStartDate = (data: any) => {
    this.setState({
      startDate: data,
    });
  };
}
