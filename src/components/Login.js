import { useContext } from "react";

// import react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

// import Components
import MainAdmin from "./MainAdmin";
import LandingPage from "./LandingPage";

// import page

// import context
import { AppContext } from "../Context/AppContext";

export default function CheckLogin() {
  const [state, dispatch, hari] = useContext(AppContext);

  return <Router>{state.isLogin ? <MainAdmin /> : <LandingPage />}</Router>;
}
