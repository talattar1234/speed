import React from "react";
import {
    Route,
    Redirect,
  } from "react-router-dom";

  // PrivateRoute - reffer to isAuth 
export function PrivateRoute({ component: Component, ...rest }) {
  const {isAuth} = rest;
    return (
      <Route
        {...rest}
        render={props =>
            isAuth ? (
            <Component {...props} />
          ) : (
            <Redirect 
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }