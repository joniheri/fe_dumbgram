import { useContext } from "react";

// import Components
import MainAdmin from "./MainAdmin";
import LandingPage from "./LandingPage";

// import context
import { AppContext } from "../Context/AppContext";

export default function CheckLogin() {
  const [state, dispatch, hari] = useContext(AppContext);
  console.log("Hari : " + hari);
  console.log(state);

  return <div>{state.isLogin ? <MainAdmin /> : <LandingPage />}</div>;
}
