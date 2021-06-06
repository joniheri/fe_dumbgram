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
import UploadPhotos from "../img/UploadPhotos.png";
import Save from "../img/Save.png";

export default function EditProfilePage() {
  return (
    <div>
      <h3 className="mb-3" style={{ color: "#fff" }}>
        Edit Profile
      </h3>
      <Link to="#">
        <Image
          src={UploadPhotos}
          style={{ cursor: "pointer", height: "40px", width: "auto" }}
          className="mb-3 mt-3"
        />
      </Link>
      <InputGroup>
        <FormControl
          name=""
          className="input1 mb-3"
          placeholder="Name"
          style={{ border: "0px solid" }}
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name=""
          className="input1 mb-3"
          placeholder="Username"
          style={{ border: "0px solid" }}
        />
      </InputGroup>
      <InputGroup>
        <FormControl
          name=""
          className="input1 mb-3"
          placeholder="Bio"
          as="textarea"
          rows={6}
          style={{ border: "0px solid" }}
        />
      </InputGroup>
      <div align="right">
        <Link to="#">
          <Image
            src={Save}
            style={{ cursor: "pointer", height: "40px", width: "auto" }}
            className="mb-3 mt-3"
          />
        </Link>
      </div>
    </div>
  );
}
