import { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
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

export default function HomePage() {
  const [state] = useContext(AppContext);
  return (
    <div>
      <h1 align="center" style={{ color: "#fff" }}>
        This is Home Page
      </h1>
      <Row style={{ margin: "120px 0 0 100px" }}>
        <Col sm={6}></Col>
        <Col sm={6}></Col>
      </Row>
    </div>
  );
}
