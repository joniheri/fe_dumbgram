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

export default function ExamplePage() {
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
            <Card>
              <Card.Img
                style={{
                  marginBottom: "10px",
                }}
                src={Rectangle6}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          ></Col>
          <Col
            sm={4}
            style={{
              padding: "0 10px 0 0",
            }}
          ></Col>
        </Row>
      </Col>
      <Card>
        <Card.Img
          style={{
            marginBottom: "10px",
          }}
          src={Rectangle6}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
}
