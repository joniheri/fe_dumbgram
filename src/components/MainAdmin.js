// Import react
import { useState, useContext } from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

// import componen
import { AppContext } from "../Context/AppContext";

// import page
import ExplorePage from "../Pages/ExplorePage";
import FeedPage from "../Pages/FeedPage";

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
import Dumbgram1 from "../img/DumbGram1.png";
import Edit1 from "../img/edit1.png";
import Feed from "../img/Feed.png";
import Explore from "../img/Explore.png";
import Search from "../img/Search.png";
import Bell1 from "../img/Bell1.png";
import CreatePost from "../img/Create Post.png";
import Paperplane1 from "../img/paper-plane 1.png";
import Logout from "../img/Logout.png";
import EllipseLisa from "../img/EllipseLisa.png";

export default function MainAdmin() {
  const [state, dispatch] = useContext(AppContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };
  const rightConten = () => {
    dispatch({
      type: "FEED",
    });
  };
  return (
    <Router>
      <Row style={{ padding: "10px 0 10px 0" }}>
        {/* Left */}
        <Col
          sm={4}
          style={{
            padding: "30px 40px 0 50px",
            borderRight: "1px solid #6A6A6A",
          }}
        >
          <Row>
            <Col>
              <Link to="/feed">
                <div style={{ padding: "0 0 40px 0" }} className="edit1">
                  <Image src={Dumbgram1} />
                </div>
              </Link>
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
        </Col>
        {/* Left */}

        {/* Right */}
        <Col
          sm={8}
          style={{
            padding: "30px 50px 0 50px",
          }}
        >
          <Row style={{ padding: "0 0 20px 0" }}>
            <Col sm={6}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text
                    className="input1"
                    style={{ height: "30px", border: "0px solid" }}
                  >
                    <Image src={Search} />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="input1"
                  placeholder="Search"
                  style={{ height: "30px", border: "0px solid" }}
                />
              </InputGroup>
            </Col>
            <Col sm={6} style={{ textAlign: "right", padding: "0 15px 0 0" }}>
              <Image
                src={Bell1}
                style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
              />
              <Image
                src={Paperplane1}
                style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
              />
              <Image
                src={CreatePost}
                style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
              />
            </Col>
          </Row>

          {/* RightConten */}
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route exact path="/explore" component={ExplorePage} />
          </Switch>
          {/* <FeedPage /> */}
          {/* RightConten */}
        </Col>
        {/* EndRight */}
      </Row>
    </Router>
  );
}
