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
import Rectangle3 from "../img/Rectangle 3.png";
import Rectangle4 from "../img/Rectangle 4.png";
import Rectangle5 from "../img/Rectangle 5.png";
import Rectangle6 from "../img/Rectangle 6.png";
import Rectangle8 from "../img/Rectangle 8.png";
import Rectangle9 from "../img/Rectangle 9.png";
import Rectangle10 from "../img/Rectangle 10.png";
import Rectangle12 from "../img/Rectangle 12.png";

export default function ExplorePage() {
  return (
    <Row>
      <Col>
        <h3 style={{ color: "#fff", padding: "0 0 20px 0" }}>Explore</h3>
        <Row style={{ padding: "0 0 0 15px" }}>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
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
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
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
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          >
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
    </Row>
  );
}
