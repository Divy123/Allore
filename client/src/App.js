import React from "react";
import Main from "./Main";
import AuthContextProvider from "./contexts/authContext";

const App = props => {
  return (
    <AuthContextProvider>
      <Main />
    </AuthContextProvider>
  );
};

export default App;
