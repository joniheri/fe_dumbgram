import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Image,
} from "react-bootstrap";
import React, { useState } from "react";

// import image
import img_wow from "../img/WOW.png";
import img_window from "../img/Window of World.png";
import vector1 from "../img/Vector 1.png";

function LandingPage() {
  //===================
  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [loginShow, setSigInShow] = useState(false);
  const [sigupShow, setSigUpShow] = useState(false);
  const onSwitchLogin = () => {
    setSigUpShow(false);
    setSigInShow(true);
  };
  const onSwitchSigUp = () => {
    setSigInShow(false);
    setSigUpShow(true);
  };
  //===================

  return (
    <Container fluid className="landing_page mr-min-10">
      <Row>
        <Col sm={6}>
          <div style={{ marginLeft: "30px" }}>
            <Image
              src={img_wow}
              style={{
                width: "360px",
                height: "auto",
                marginTop: "100px",
                marginLeft: "50px",
              }}
            />
            <img
              src={img_window}
              style={{
                width: "370px",
                height: "auto",
                marginTop: "-30px",
                marginLeft: "33px",
              }}
            />
            <p
              style={{
                fontSize: "25px",
                marginTop: "20px",
                marginLeft: "40px",
              }}
            >
              Sign-up now and subscribe to enjoy all the cool and latest books -
              The best book rental service provider in Indonesia.
            </p>
            <div style={{ marginTop: "50px", marginLeft: "40px" }}>
              <Button
                style={{
                  width: "160px",
                  backgroundColor: "#D60000",
                  borderColor: "#D60000",
                  marginRight: "30px",
                }}
                onClick={() => setSigUpShow(true)}
              >
                Sign Up
              </Button>
              <Button
                style={{
                  width: "160px",
                  backgroundColor: "#D8D8D8",
                  borderColor: "#D8D8D8",
                  marginRight: "30px",
                  color: "black",
                }}
                onClick={() => setSigInShow(true)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div></div>
        </Col>
      </Row>

      {/* SigUpModal============== */}
      <Modal
        size=""
        show={sigupShow}
        onHide={() => setSigUpShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Sig Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Email"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="text"
            placeholder="Full Name"
            style={{ margin: "0 0 15px 0" }}
          />
          <Button
            style={{
              width: "100%",
              margin: "20px 0 0 0",
              backgroundColor: "#D60000",
              borderColor: "#D60000",
            }}
          >
            Sign Up
          </Button>
          <center>
            <p style={{ margin: "20px 0 20px 0" }}>
              Already have an account..? Klik{" "}
              <strong
                style={{
                  color: "black",
                  cursor: "pointer",
                }}
                onClick={onSwitchLogin}
              >
                Here
              </strong>
            </p>
          </center>
        </Modal.Body>
      </Modal>
      {/* EndSigUplModal============== */}

      {/* LoginModal============== */}
      <Modal
        size=""
        show={loginShow}
        onHide={() => setSigInShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="email"
            placeholder="Email"
            style={{ margin: "0 0 15px 0" }}
          />
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ margin: "0 0 15px 0" }}
          />
          <Button
            style={{
              width: "100%",
              margin: "20px 0 0 0",
              backgroundColor: "#D60000",
              borderColor: "#D60000",
            }}
          >
            Sign Up
          </Button>
          <center>
            <p style={{ margin: "20px 0 20px 0" }}>
              Don't have an account..? Klik{" "}
              <strong
                style={{
                  cursor: "pointer",
                }}
                onClick={onSwitchSigUp}
              >
                Here
              </strong>
            </p>
          </center>
        </Modal.Body>
      </Modal>
      {/* EndLoginlModal============== */}

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
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Ipsum molestiae natus adipisci deleniti rem!</p>
        </Modal.Body>
      </Modal>
      {/* EndDefaultModal============== */}

      {/* SmallModal============== */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      {/* EndSmallModal============== */}

      {/* LargelModal============== */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      {/* EndLargelModal============== */}
    </Container>
  );
}

export default LandingPage;
