import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./movie-modal.scss";

export default class MovieModal extends Component<{
  show: boolean;
  handleClose: Function;
}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="MovieModal">
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
}
