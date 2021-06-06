import React, { useState, useContext } from "react";

// import component
import { AppContext } from "../Context/AppContext";

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
import Edit1 from "../img/edit1.png";
import EllipseLisa from "../img/EllipseLisa.png";
import Feed from "../img/Feed.png";
import Logout from "../img/Logout.png";
import Explore from "../img/Explore.png";

export default function ProfilePage() {
  const [state, dispatch] = useContext(AppContext);

  // Logout action
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  //   end handle loguout action

  return (
    <div>
      <Row>
        <Col>
          <div>
            <div style={{ textAlign: "right" }}>
              <Image src={Edit1} className="edit1" />
            </div>
            <center>
              <div style={{ padding: "0 0 25px 0" }}>
                <Card.Img className="profile1" src={EllipseLisa} />
              </div>
              <div>
                <h4 style={{ color: "#fff" }}>Lissa</h4>
                <p style={{ color: "#ABABAB" }}>@lalisa</p>
              </div>
            </center>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ textAlign: "center", color: "#ABABAB" }}>
          <p>Post</p>
          <p
            style={{
              fontWeight: "bold",
            }}
          >
            200
          </p>
        </Col>

        {/* lineLeft */}
        <Row>
          <Col
            style={{
              borderLeft: "1px solid #6A6A6A",
              margin: "5px 15px 20px 15px",
            }}
          ></Col>
        </Row>
        {/* endlineLeft */}

        <Col
          style={{
            textAlign: "center",
            color: "#ABABAB",
          }}
        >
          <p>Followers</p>
          <p style={{ fontWeight: "bold" }}>51.2 M</p>
        </Col>

        {/* lineRight */}
        <Row>
          <Col
            style={{
              borderRight: "1px solid #6A6A6A",
              margin: "5px 15px 20px 15px",
            }}
          ></Col>
        </Row>
        {/* endlineRight */}

        <Col style={{ textAlign: "center", color: "#ABABAB" }}>
          <p>Following</p>
          <p style={{ fontWeight: "bold" }}>4</p>
        </Col>
      </Row>

      <div style={{ padding: "20px 0 0 10px", color: "#ABABAB" }}>
        <p style={{ fontSize: "15px" }}>
          Rapper in Black Pink, Brand Ambasador Penshoppe
        </p>
      </div>
      {/* lineBottom */}

      <Row>
        <Col
          style={{
            borderBottom: "1px solid #6A6A6A",
            margin: "10px 15px 20px 23px",
          }}
        ></Col>
      </Row>
      {/* endlineBottom */}

      <Row>
        <Col style={{ padding: "0 15px 0 20px" }}>
          <Link to="/">
            <div className="btn3">
              <Image src={Feed} className="edit1" />
            </div>
          </Link>
          <Link to="/explore">
            <div className="btn3">
              <Image src={Explore} className="edit1" />
            </div>
          </Link>
        </Col>
      </Row>

      {/* lineBottom */}
      <Row>
        <Col
          style={{
            borderBottom: "1px solid #6A6A6A",
            margin: "10px 15px 20px 23px",
          }}
        ></Col>
      </Row>
      {/* endlineBottom */}

      <Row>
        <Col>
          <p className="btn3" onClick={handleLogout}>
            <Image
              src={Logout}
              className="edit1"
              // style={{ padding: "0 20px 10px 0" }}
            />
          </p>
        </Col>
      </Row>
    </div>
  );
}
