import React, { useState, useEffect } from "react";
import { makeAuthenticator, makeUserManager, Callback } from "react-oidc";
import { Router, Switch, Route } from "react-router";

import { settings } from "../../settings";

const userManager = makeUserManager(settings);

const OauthBase = () => {
  let [fData, setFData] = useState("...loading");

  useEffect(() => {
    console.log("effect");
  });

  const logIn = () => {
    console.log("login");
  };

  const logOut = () => {
    console.log("logout");
  };

  const checkUserData = () => {
    console.log("check user data");
    setFData("no user data");
  };

  return (
    <div className="with_auth_wrapper">
      <Router>
        <Switch>
          <Route
            path="/callback"
            render={routeProps => (
              <div className="controls">
                <pre
                  style={{
                    backgroundColor: "gray",
                    border: "solid 1px darkgray"
                  }}
                >
                  {fData}
                </pre>
                <button className="btn btn-primary" onClick={logIn}>
                  login
                </button>
                <button className="btn btn-secondary" onClick={logOut}>
                  logout
                </button>
                <button className="btn btn-success" onClick={checkUserData}>
                  checkData
                </button>
              </div>
            )}
            userManager={userManager}
          />
        </Switch>
      </Router>
    </div>
  );
};

const OAuthComponent = makeAuthenticator({
  userManager: userManager,
  signinArgs: {
    state: {
      log: 108
    }
  }
})(OauthBase);

export default OAuthComponent;
