import React from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

// import bootstrap
import { Row, Col, Image } from "react-bootstrap";

// import img
import Ellipse2 from "../../img/Ellipse2.png";
import Ellipse3 from "../../img/Ellipse3.png";

export default function MessageFriend() {
  return (
    <div
      style={{
        padding: "0",
        height: "600px",
      }}
    >
      <Row>
        <Col>
          <Link to="messagedetail" style={{ textDecoration: "none" }}>
            <Row className="btn4" style={{ borderBottom: "1px solid #1F1F1F" }}>
              <Col sm={2} style={{ padding: "0 0 0 5px" }}>
                <div>
                  <Image
                    src={Ellipse2}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col
                sm={9}
                style={{
                  margin: "0 5px 0 5px",
                  padding: "0 0 5px 0",
                }}
              >
                <p style={{ padding: "0", margin: "0", fontWeight: "bold" }}>
                  Egi
                </p>
                <p style={{ padding: "0", margin: "0", fontSize: "12px" }}>
                  Hallo lisa
                </p>
              </Col>
            </Row>
          </Link>
          <Link to="messagesend" style={{ textDecoration: "none" }}>
            <Row className="btn4" style={{ borderBottom: "1px solid #1F1F1F" }}>
              <Col sm={2} style={{ paddingLeft: "5px" }}>
                <div>
                  <Image
                    src={Ellipse3}
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Col>
              <Col
                sm={9}
                style={{
                  margin: "0 5px 0 5px",
                  padding: "0 0 5px 0",
                }}
              >
                <p style={{ padding: "0", margin: "0", fontWeight: "bold" }}>
                  Beach lover
                </p>
                <p style={{ padding: "0", margin: "0", fontSize: "12px" }}>
                  Hello Lisa, when do you go to the beach
                </p>
              </Col>
            </Row>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
