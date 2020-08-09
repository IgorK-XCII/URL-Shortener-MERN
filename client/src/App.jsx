import React from "react";
import "materialize-css";
import { useRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/Auth.context";
import { Navbar } from "./components/Navbar";

function App() {
  const { login, logout, token, userId } = useAuth();
  const isAuthenticated = !!token;

  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        userId,
        isAuthenticated
      }}
    >
      <BrowserRouter>
        {isAuthenticated ? <Navbar /> : null}
        <div className="container">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
