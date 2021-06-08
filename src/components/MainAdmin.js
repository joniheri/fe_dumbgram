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

// import bootstrap
import {
  InputGroup,
  FormControl,
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

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
import EditProfilePage from "../Pages/EditProfilePage";
import ProfilePeoplePage from "../Pages/ProfilePeoplePage";
import FeedPeoplePage from "../Pages/FeedPeoplePage";

// import img
import Dumbgram1 from "../img/DumbGram1.png";
import Edit1 from "../img/edit1.png";
import Search from "../img/Search.png";
import Bell1 from "../img/Bell1.png";
import CreatePost from "../img/Create Post.png";
import Paperplane1 from "../img/paper-plane 1.png";
import EllipseLisa from "../img/EllipseLisa.png";
import Ellipse4 from "../img/Ellipse4.png";
import Ellipse5 from "../img/Ellipse5.png";

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
                <Route exact path="/explore" component={ProfilePage} />
                <Route exact path="/messagepage" component={MessageFriend} />
                <Route exact path="/messagedetail" component={MessageFriend} />
                <Route exact path="/messagesend" component={MessageFriend} />
                <Route exact path="/createpost" component={ProfilePage} />
                <Route exact path="/editprofile" component={ProfilePage} />
                <Route
                  exact
                  path="/profilepeople"
                  component={ProfilePeoplePage}
                />
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
            <Col sm={6}>
              <Row
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "0",
                }}
              >
                {/* DropdownNotif */}
                <Col>
                  <div
                    class="dropdown"
                    style={{
                      float: "right",
                      marginTop: "5px",
                      marginLeft: "15px",
                    }}
                  >
                    <button class="dropbtn">
                      <Image src={Bell1} />
                    </button>
                    <div class="dropdown-content">
                      <a href="#">
                        <Row
                          style={{
                            margin: "0",
                            marginBottom: "5px",
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
                                fontSize: "15px",
                              }}
                            >
                              abdul_h
                            </p>
                            <p
                              style={{
                                padding: "0",
                                margin: "0",
                                color: "#b1b1b1",
                                fontSize: "13px",
                              }}
                            >
                              Nice picture
                            </p>
                          </Col>
                        </Row>
                      </a>
                      <a href="#">
                        <Row
                          style={{
                            margin: "0",
                            marginBottom: "5px",
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
                                fontSize: "15px",
                              }}
                            >
                              egi_lol
                            </p>
                            <p
                              style={{
                                padding: "0",
                                margin: "0",
                                color: "#b1b1b1",
                                fontSize: "13px",
                              }}
                            >
                              goog vibe
                            </p>
                          </Col>
                        </Row>
                      </a>
                    </div>
                  </div>
                </Col>
                {/* EndDropdownNotif */}

                <Col
                  style={{
                    padding: "0",
                    margin: "0",
                    textAlign: "center",
                  }}
                >
                  <Link to="/messagepage">
                    <Image
                      src={Paperplane1}
                      style={{
                        cursor: "pointer",
                        marginTop: "5px",
                        marginLeft: "0px",
                      }}
                    />
                  </Link>
                </Col>
                <Col style={{ padding: "0", margin: "0" }}>
                  <Link to="createpost">
                    <Image
                      src={CreatePost}
                      style={{
                        cursor: "pointer",
                        marginLeft: "20px",
                        marginTop: "2px",
                        marginRight: "10px",
                      }}
                    />
                  </Link>
                </Col>
              </Row>
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
            <Route exact path="/editprofile" component={EditProfilePage} />
            <Route exact path="/profilepeople" component={FeedPeoplePage} />
          </Switch>
          {/* EndRightConten */}
        </Col>
        {/* EndRight */}
      </Row>
    </Router>
  );
}
