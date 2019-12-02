import React, { useReducer, createContext } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  name: null,
  email: null,
  token: null
};

const AuthContextProvider = props => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
