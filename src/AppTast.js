import "./css/Style.css";
import { Container } from "react-bootstrap";

import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";

function AppTask() {
  return (
    <Container fluid className="">
      <LandingPage />
    </Container>
  );
}

export default AppTask;
