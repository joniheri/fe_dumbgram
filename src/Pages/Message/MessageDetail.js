import React from "react";

// import bootstrap
import { InputGroup, FormControl, Image, Row, Col } from "react-bootstrap";

// import img
import Edit1 from "../../img/edit1.png";
import Ellipse2 from "../../img/Ellipse2.png";

export default function MessageDetail() {
  return (
    <div
      style={{
        padding: "0 15px 0 15px",
      }}
    >
      <Row
        style={{
          cursor: "pointer",
          background: "#1f1f1f",
          borderRadius: "2%",
          marginBottom: "10px",
        }}
      >
        <Col sm={1} style={{ padding: "5px 0 5px 10px" }}>
          <Image
            src={Ellipse2}
            style={{
              width: "40px",
              height: "40px",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col
          sm={9}
          style={{
            margin: "0 5px 0 5px",
            padding: "0 0 5px 0",
            verticalAlign: "middle",
          }}
        >
          <p
            style={{
              padding: "0",
              margin: "0",
              color: "#b1b1b1",
              fontWeight: "bold",
            }}
          >
            Hallo lisa
          </p>
        </Col>
      </Row>
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
