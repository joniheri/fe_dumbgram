import { createContext, useReducer } from "react";
import User from "../Data/User.json";

export const UserContext = createContext();

const initialState = {
  isLogin: false,
  user: User,
};

const reducer = (state, action) => {
  const { type, pyload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return { isLogin: true, user: pyload };
    case "LOGOUT":
      return { isLogin: false, user: {} };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
