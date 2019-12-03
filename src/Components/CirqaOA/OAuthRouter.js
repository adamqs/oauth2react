import React, { useState, useEffect } from "react";
import queryString from "query-string";
import CirqaOA from "./CirqaOA";
import LoginComponent from "./LoginComponent";

const OAuthRouter = () => {
  let [token, setToken] = useState(false);

  useEffect(() => {
    let tempQuery = queryString.parse(window.location.href);
    if (typeof tempQuery === "object") {
      console.log(tempQuery.access_token);
      setToken(tempQuery.access_token);
    } else {
      setToken(false);
      console.log("invalid token");
    }
    console.log("useEffect triggered");
  }, []);

  return <div>{token ? <CirqaOA token={token} /> : <LoginComponent />}</div>;
};

export default OAuthRouter;
