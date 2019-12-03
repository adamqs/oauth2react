import React, { useState, useEffect } from "react";
import queryString from "query-string";

const SpotifyComponent = () => {
  let [token, setToken] = useState("");
  let [fData] = useState("...loading");

  useEffect(() => {
    let tempQuery = queryString.parse(window.location.search);
    if (typeof tempQuery === "object") {
      console.log(tempQuery);
      setToken(tempQuery.access_token);

      fetch("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + tempQuery.access_token }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
    } else {
      console.log("invalid token");
    }
    console.log("effect");
  }, [setToken]);

  const logIn = () => {
    console.log("login");
    window.location = "http://localhost:8888/login";
  };

  const logOut = () => {
    // console.log("logout");
    console.log(token);
  };

  const checkUserData = () => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + token }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="controls">
      <pre
        style={{
          backgroundColor: "gray",
          border: "solid 1px darkgray"
        }}
      >
        {token === "" ? token : fData}
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
  );
};

export default SpotifyComponent;
