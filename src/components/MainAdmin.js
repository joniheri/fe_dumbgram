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

// import page
import ExplorePage from "../Pages/ExplorePage";
import FeedPage from "../Pages/FeedPage";
import MessageFriend from "../Pages/Message/MessageFriend";
import MessageEmpty from "../Pages/Message/MessageEmpty";
import MessageDetail from "../Pages/Message/MessageDetail";
import MessageSend from "../Pages/Message/MessageSend";
import ProfilePage from "../Pages/ProfilePage";
import CreatePostPage from "../Pages/CreatePostPage";

// import bootstrap
import { InputGroup, FormControl, Row, Col, Image } from "react-bootstrap";

// import img
import Dumbgram1 from "../img/DumbGram1.png";
import Edit1 from "../img/edit1.png";
import Search from "../img/Search.png";
import Bell1 from "../img/Bell1.png";
import CreatePost from "../img/Create Post.png";
import Paperplane1 from "../img/paper-plane 1.png";
import EllipseLisa from "../img/EllipseLisa.png";

export default function MainAdmin() {
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
              <div style={{ padding: "0 0 40px 0" }}>
                <Link to="/">
                  <Image src={Dumbgram1} />
                </Link>
              </div>

              {/* LeftContent */}
              <Switch>
                <Route exact path="/" component={ProfilePage} />
                <Route exact path="/messagepage" component={MessageFriend} />
                <Route exact path="/messagedetail" component={MessageFriend} />
                <Route exact path="/messagesend" component={MessageFriend} />
                <Route exact path="/createpost" component={ProfilePage} />
              </Switch>
              {/* LeftContent */}
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
          <Row style={{ padding: "0 0 30px 0" }}>
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
              <Link to="#" title="Notif">
                <Image
                  src={Bell1}
                  style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                />
              </Link>
              <Link to="/messagepage" title="Message">
                <Image
                  src={Paperplane1}
                  style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                />
              </Link>
              <Link to="createpost" title="Create Post">
                <Image
                  src={CreatePost}
                  style={{ padding: "0 0 10px 20px", cursor: "pointer" }}
                />
              </Link>
            </Col>
          </Row>

          {/* RightConten */}
          <Switch>
            <Route exact path="/" component={FeedPage} />
            <Route exact path="/explore" component={ExplorePage} />
            <Route exact path="/messagepage" component={MessageEmpty} />
            <Route exact path="/messagedetail" component={MessageDetail} />
            <Route exact path="/messagesend" component={MessageSend} />
            <Route exact path="/createpost" component={CreatePostPage} />
          </Switch>
          {/* EndRightConten */}
        </Col>
        {/* EndRight */}
      </Row>
    </Router>
  );
}
