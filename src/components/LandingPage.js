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
import React, { useState } from "react";

// import image
import Dumbgram from "../img/DumbGram.png";
import Rectangle3 from "../img/Rectangle 3.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Rectangle6 from "../img/Rectangle 6.png";
import Rectangle8 from "../img/Rectangle 8.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle12 from "../img/Rectangle 12.png";

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
        <Col md={5}>
          <div style={{ marginLeft: "80px" }}>
            <Image
              src={Dumbgram}
              style={{
                width: "360px",
                height: "auto",
                marginTop: "100px",
              }}
            />
            <p
              style={{
                fontSize: "50px",
                marginTop: "90px",
                color: "#fff",
              }}
            >
              Share your best photos or videos
            </p>
            <p
              style={{
                fontSize: "22px",
                marginTop: "20px",
                color: "#6A6A6A",
              }}
            >
              Join now, share your creations with another people and enjoy other
              creations.
            </p>
            <div style={{ marginTop: "50px" }}>
              <Button
                className="btn-login"
                // onClick={() => setSigInShow(true)}
              >
                Login
              </Button>
              <Button
                className="btn-register"
                // onClick={() => setSigUpShow(true)}
              >
                Register
              </Button>
            </div>
          </div>
        </Col>
        <Col md={7} style={{ marginTop: "100px", color: "#fff" }}>
          <Row>
            <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle6}
              />
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle5}
              />
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle10}
              />
            </Col>
            <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle3}
              />
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle9}
              />
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle4}
              />
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle8}
              />
              <Image
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle12}
              />
            </Col>
          </Row>
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
