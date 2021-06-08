// import react
import React, { useState } from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

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
import Rectangle3 from "../img/Rectangle 3.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Rectangle6 from "../img/Rectangle 6.png";
import Rectangle8 from "../img/Rectangle 8.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle12 from "../img/Rectangle 12.png";
import Heart1 from "../img/Heart1.png";
import Speechbubble1 from "../img/speech-bubble1.png";
import Paperplane2 from "../img/paper-plane2.png";
import EllipseZayn1 from "../img/EllipseZayn1.png";
import Ellipse2 from "../img/Ellipse2.png";
import Ellipse4 from "../img/Ellipse4.png";
import Ellipse5 from "../img/Ellipse5.png";
import Rectangle11 from "../img/Rectangle11.png";

export default function FeedPage() {
  const [loginShow, setSigInShow] = useState(false);
  const onSwitchLogin = () => {
    setSigInShow(true);
  };
  return (
    <Row>
      <Col>
        <h3 style={{ color: "#fff", padding: "0 0 20px 0" }}>Feed</h3>
        <Row style={{ padding: "0 0 0 15px" }}>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
                src={Rectangle10}
                onClick={() => setSigInShow(true)}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle5}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle6}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle3}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle9}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle4}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle8}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
            <Card className="bg1" style={{ padding: "0 0 20px 0" }}>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle12}
              />
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <Card.Img
                    className="profile2"
                    src={EllipseZayn1}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col style={{ textAlign: "right" }}>
                  <Image
                    src={Heart1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                  />
                  <Row>
                    <Col style={{ color: "#ABABAB", fontSize: "14px" }}>
                      126.100 Like
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* DetailFeedModal============== */}
      <Modal
        size="lg"
        show={loginShow}
        onHide={() => setSigInShow(false)}
        aria-labelledby="example-modal-sizes-title"
        centered
      >
        <Modal.Body
          className="bg-modal"
          style={{ color: "#fff", padding: "0", margin: "0" }}
        >
          <Row>
            <Col sm={7} style={{ padding: "0", margin: "0" }}>
              <Card.Img
                src={Rectangle11}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col sm={5} style={{ marginTop: "35px" }}>
              <Row
                style={{
                  background: "#1f1f1f",
                  borderRadius: "2%",
                  margin: "0",
                }}
              >
                <Col sm={1} style={{}}>
                  <Link to="/profilepeople">
                    <Image
                      src={EllipseZayn1}
                      style={{
                        width: "35px",
                        height: "35px",
                        objectFit: "cover",
                        padding: "0",
                      }}
                    />
                  </Link>
                </Col>
                <Col sm={10} style={{ marginLeft: "15px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                    }}
                  >
                    Zayn
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  background: "#1f1f1f",
                  borderRadius: "2%",
                  margin: "0",
                  marginBottom: "20px",
                  borderBottom: "1px solid rgba(171, 171, 171, 0.3)",
                }}
              >
                <Col sm={1} style={{}}>
                  <div
                    src={"#"}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                      padding: "0",
                    }}
                  ></div>
                </Col>
                <Col sm={10} style={{ marginLeft: "15px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                      fontSize: "14px",
                    }}
                  >
                    To Begin Again..
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  background: "#1f1f1f",
                  borderRadius: "2%",
                  margin: "0",
                  marginBottom: "15px",
                }}
              >
                <Col sm={1} style={{}}>
                  <Image
                    src={Ellipse4}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                      padding: "0",
                    }}
                  />
                </Col>
                <Col sm={10} style={{ marginLeft: "15px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                    }}
                  >
                    abdul_h
                  </p>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                    }}
                  >
                    Nice picture
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  background: "#1f1f1f",
                  borderRadius: "2%",
                  margin: "0",
                  marginBottom: "15px",
                }}
              >
                <Col sm={1} style={{}}>
                  <Image
                    src={Ellipse5}
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                      padding: "0",
                    }}
                  />
                </Col>
                <Col sm={10} style={{ marginLeft: "15px" }}>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                    }}
                  >
                    egi_lol
                  </p>
                  <p
                    style={{
                      padding: "0",
                      margin: "0",
                      color: "#b1b1b1",
                    }}
                  >
                    goog vibe
                  </p>
                </Col>
              </Row>
              <div
                style={{
                  marginRight: "20px",
                  marginLeft: "15px",
                  marginBottom: "10px",
                  marginTop: "30px",
                  textAlign: "right",
                }}
              >
                <Row
                  style={{
                    right: "50px",
                    position: "absolute",
                  }}
                >
                  <Image
                    src={Heart1}
                    style={{
                      paddingLeft: "15px",
                      cursor: "pointer",
                      height: "15px",
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Speechbubble1}
                    style={{
                      paddingLeft: "15px",
                      cursor: "pointer",
                      height: "15px",
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Paperplane2}
                    style={{
                      paddingLeft: "15px",
                      cursor: "pointer",
                      height: "15px",
                      width: "auto",
                    }}
                  />
                </Row>
                <Row>
                  <Col
                    style={{
                      color: "#ABABAB",
                      fontSize: "14px",
                      marginTop: "17px",
                    }}
                  >
                    126.100 Like
                  </Col>
                </Row>
              </div>
              <Row
                style={{
                  margin: "0",
                  marginRight: "5px",
                  marginLeft: "0px",
                }}
              >
                <Col>
                  <InputGroup className="mb-3">
                    <FormControl
                      className="input1"
                      placeholder="Comment..."
                      style={{ height: "40px", border: "0px solid" }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {/* EndDetailFeedlModal============== */}
    </Row>
  );
}
