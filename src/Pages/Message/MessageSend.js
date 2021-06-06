import React from "react";

// import bootstrap
import {
  InputGroup,
  FormControl,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Image,
  Card,
} from "react-bootstrap";

// import img
import Ellipse2 from "../../img/Ellipse2.png";
import Ellipse3 from "../../img/Ellipse3.png";

export default function MessageSend() {
  return (
    <div
      style={{
        padding: "0 15px 0 15px",
      }}
    >
      <Row>
        <InputGroup className="mb-3">
          <FormControl
            className="input1"
            placeholder="Send Message"
            style={{ height: "40px", border: "0px solid" }}
          />
        </InputGroup>
      </Row>
    </div>
  );
}
