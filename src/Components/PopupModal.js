import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function PopupModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Your Popup Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Content of your popup */}
        Your popup content goes here.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        {/* Additional buttons or actions */}
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;
