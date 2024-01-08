import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

import {
  AuthenticationReducer,
  initAuthenticationState,
} from "../reducers/AuthenticationReducer";
const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
  const [authenticationState, authenticationDispatch] = useReducer(
    AuthenticationReducer,
    initAuthenticationState
  );

  return (
    <AuthenticationContext.Provider
      value={{ authenticationState, authenticationDispatch }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => useContext(AuthenticationContext);
export { AuthenticationProvider, useAuthentication };
