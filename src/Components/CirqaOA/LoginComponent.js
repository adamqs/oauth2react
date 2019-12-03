import React, { useState } from "react";
import { settings } from "../../settings";

function randomString(length) {
  let charset =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._";
  let result = "";

  while (length > 0) {
    let bytes = new Uint8Array(16);
    let random = window.crypto.getRandomValues(bytes);

    random.forEach(function(c) {
      if (length === 0) {
        return;
      }
      if (c < charset.length) {
        result += charset[c];
        length--;
      }
    });
  }
  return result;
}

let nonce = randomString(16);
console.log(nonce);

let url =
  settings.authority +
  "?" +
  "client_id=" +
  encodeURI(settings.client_id) +
  "&" +
  "redirect_uri=" +
  encodeURI(settings.redirect_uri) +
  "&" +
  "response_type=" +
  encodeURI(settings.response_type) +
  "&" +
  "scope=" +
  encodeURI(settings.scope) +
  "&nonce=" +
  randomString(36);
// "&nonce=83029fd3a728469e8f63a55f718eaa77";

const LoginComponent = () => {
  useState(() => {
    console.log("useState triggered");
  }, []);

  const logIn = () => {
    console.log(url);
    window.location = url;
  };
  return (
    <div>
      <p>Login</p>
      <button className="btn btn-primary" onClick={logIn}>
        login
      </button>
    </div>
  );
};

export default LoginComponent;
