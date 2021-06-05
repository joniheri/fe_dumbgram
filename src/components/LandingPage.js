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
import { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";

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

  const [state, dispatch] = useContext(AppContext);

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  return (
    <Row style={{ margin: "120px 0 0 100px" }}>
      <Col md={5} style={{ padding: "0 20px 50px 0" }}>
        <Image
          src={Dumbgram}
          style={{
            width: "360px",
            height: "auto",
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
            fontSize: "24px",
            marginTop: "20px",
            color: "#6A6A6A",
          }}
        >
          Join now, share your creations with another people and enjoy other
          creations.
        </p>
        <Row style={{ marginTop: "50px" }}>
          <Col sm={5}>
            <Button className="btn-login" onClick={() => setSigInShow(true)}>
              Login
            </Button>
          </Col>
          <Col sm={5}>
            <Button className="btn-register" onClick={() => setSigUpShow(true)}>
              Register
            </Button>
          </Col>
        </Row>
      </Col>
      <Col md={7}>
        <Row>
          <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle6}
            />
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle5}
            />
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle10}
            />
          </Col>
          <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle3}
            />
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle9}
            />
          </Col>
          <Col sm={3} style={{ marginRight: "10px", padding: "0" }}>
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle4}
            />
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle8}
            />
            <Card.Img
              style={{
                marginBottom: "10px",
              }}
              src={Rectangle12}
            />
          </Col>
        </Row>
      </Col>

      {/* RegisterModal============== */}
      <Modal
        className=""
        size="sm"
        show={sigupShow}
        onHide={() => setSigUpShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
        style={{ borderColor: "#1F1F1F  " }}
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal">
          <Form.Control
            type="email"
            placeholder="Email"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Form.Control
            type="text"
            placeholder="Name"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Form.Control
            type="text"
            placeholder="Username"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Button
            className="btn-register2"
            style={{
              width: "100%",
              margin: "20px 0 0 0",
            }}
          >
            Register
          </Button>
          <center>
            <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
              Already have an account..? Klik{" "}
              <strong
                style={{
                  cursor: "pointer",
                  color: "#B1B1B1",
                }}
                onClick={onSwitchLogin}
              >
                Here
              </strong>
            </p>
          </center>
        </Modal.Body>
      </Modal>
      {/* EndRegisterlModal============== */}

      {/* LoginModal============== */}
      <Modal
        size="sm"
        show={loginShow}
        onHide={() => setSigInShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header
          className="bg-modal"
          style={{ border: "0", color: "#fff" }}
        >
          <Modal.Title id="example-modal-sizes-title-sm">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-modal">
          <Form.Control
            required
            type="email"
            placeholder="Email"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ margin: "0 0 15px 0" }}
            className="input1"
          />
          <Button
            className="btn-register2"
            style={{
              width: "100%",
              margin: "20px 0 0 0",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <center>
            <p style={{ margin: "20px 0 20px 0", color: "#B1B1B1" }}>
              Don't have an account..? Klik{" "}
              <strong
                style={{
                  cursor: "pointer",
                  color: "#B1B1B1",
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
    </Row>
  );
}

export default LandingPage;
