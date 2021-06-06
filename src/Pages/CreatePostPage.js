import React from "react";

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
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  FormGroup,
} from "react-bootstrap";

// import img
import CreatePost2 from "../img/CreatePost2.png";
import Upload from "../img/Upload.png";

export default function CreatePostPage() {
  return (
    <div>
      <h3 className="mb-3" style={{ color: "#fff" }}>
        Create Post
      </h3>
      <Link to="#">
        <Image
          src={CreatePost2}
          style={{ cursor: "pointer", height: "40px", width: "auto" }}
          className="mb-3 mt-3"
        />
      </Link>
      <InputGroup>
        <FormControl
          name=""
          className="input1 mb-3"
          placeholder="Caption"
          as="textarea"
          rows={6}
          style={{ border: "0px solid" }}
        />
      </InputGroup>
      <div align="right">
        <Link to="#">
          <Image
            src={Upload}
            style={{ cursor: "pointer", height: "40px", width: "auto" }}
            className="mb-3 mt-3"
          />
        </Link>
      </div>
    </div>
  );
}
