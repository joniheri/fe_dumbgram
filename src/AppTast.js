// import css
import "./css/Style.css";

// import react
import React, { useState, useContext } from "react";

// import bootstrap
import { Container } from "react-bootstrap";

// Import componens
import CheckLogin from "./Components/CheckLogin";
import LandingPage from "./Components/LandingPage";
import { UserContextProvider } from "./Context/userContext";

function AppTask() {
  return (
    <Container fluid style={{ padding: "0" }}>
      <UserContextProvider>
        {/* <CheckLogin /> */}
        <LandingPage />
        {/* {user.email != "" ? (
        console.log("Login Success!")
      ) : (
        <LandingPage Login={Login} error={error} />
      )} */}
      </UserContextProvider>
    </Container>
  );
}

export default AppTask;
