import React, { useState } from "react";

// import bootstrap
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Image,
  Card,
} from "react-bootstrap";

export default function DetailFeed({
  show,
  setShow,
  switchModal,
  dispatch,
  state,
}) {
  const onSwitch = () => {
    setShow(false);
    switchModal(true);
  };
  return (
    <div>
      <p>
        {/* DefaultModal============== */}
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-20w"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Detail Feed
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Ipsum molestiae natus adipisci deleniti rem!</p>
          </Modal.Body>
        </Modal>
        {/* EndDefaultModal============== */}
      </p>
    </div>
  );
}
