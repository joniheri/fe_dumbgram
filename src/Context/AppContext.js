import { createContext, useReducer } from "react";
import User from "../Data/User.json";

export const AppContext = createContext();

const initialState = {
  isLogin: true,
  photos: [],
  user: User,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const hari = "Sabtu 05-06-2021";
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch, hari]}>
      {props.children}
    </AppContext.Provider>
  );
};
