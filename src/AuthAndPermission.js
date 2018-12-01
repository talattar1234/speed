import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
  } from "react-router-dom";

  // PrivateRoute - reffer to isAuth 
export function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
            props.isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }