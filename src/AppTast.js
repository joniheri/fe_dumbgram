// import css
import "./css/Style.css";

// import react
import React, { useState, useContext } from "react";

// Import componens
import Login from "./Components/Login";
import Example from "./Components/Example";
import { AppContextProvider } from "./Context/AppContext";

function AppTask() {
  return (
    <AppContextProvider>
      {" "}
      {/* <Example /> */}
      <Login />
    </AppContextProvider>
  );
}

export default AppTask;
