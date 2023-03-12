import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import React from "react";
import { AuthContext } from "../view/AuthContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Component {...rest} {...props} />
          </>
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};

export default ProtectedRoute;
