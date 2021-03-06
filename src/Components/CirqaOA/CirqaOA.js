import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { apiBaseUrl, apiVersion, loginURL } from "../../settings";
import queryString from "query-string";
import LoansDisplay from "./LoansDisplay";
import SwitchComponent from "../SwitchComponent/SwitchComponent";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* border: solid 1px black; */
  padding-top: 1em;
`;

const ControlsWrapper = styled.div`
  width: 380px;
`;

const Pre = styled.pre`
  background-color: #f1fffa;
  border: solid 1px darkgray;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;
`;

const CirqaOA = props => {
  let [token, setToken] = useState(false);
  let [fData, setFData] = useState("...loading");
  let [loans, setLoans] = useState([]);
  let [checkboxState, setCheckboxState] = useState(false);
  let [sessionState, setSessionState] = useState("unchecked");
  let [localStorage, setLocalStorage] = useState(
    JSON.stringify(window.localStorage)
  );

  useEffect(() => {
    let tempQuery = queryString.parse(window.location.href);
    if (typeof tempQuery === "object") {
      console.log(tempQuery);

      setToken(tempQuery.access_token);

      if ("state" in tempQuery) {
        setSessionState(
          tempQuery.state === "checked" ? "checked" : "unchecked"
        );
        setCheckboxState(tempQuery.state === "checked" ? true : false);
      }
    }
    console.log("useEffect triggered");
  }, []);

  const saveToken = () => {
    console.log("save token :" + token);
    window.localStorage.setItem("token", token);
    setLocalStorage(token);
  };

  const getToken = () => {
    setToken(window.localStorage.getItem("token"));
  };

  const checkUserData = () => {
    if (!token) {
      setFData("token missing");
      return;
    }
    let uri = `${apiBaseUrl}/${apiVersion}/readers/r0009/loans`;
    console.log(uri);
    fetch(uri, {
      headers: { Authorization: "Bearer " + token },
      method: "GET",
      dataType: "json"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFData("loaded");
        setLoans(data.loansCollection.collection);
      })
      .catch(er => {
        console.log(`An error has occured sir! Here are some details: ${er}`);
      });
  };

  const login = () => {
    let newLoginURL = loginURL.replace("RANDOM_STATE", sessionState);
    window.location = newLoginURL;
    // console.log(newLoginURL);
  };

  const logout = () => {
    if (token) {
      window.location =
        "http://kima:56778/CirqaIdentity/connect/endsession?id_token_hint=" +
        token;
    } else {
      setFData("Cannot logout without a token");
    }
  };

  const handleCheckboxChange = () => {
    let newSessionState = !checkboxState;
    setCheckboxState(newSessionState);
    setSessionState(newSessionState ? "checked" : "unchecked");
  };

  return (
    <Wrapper>
      <ControlsWrapper>
        <div className="controls">
          <SwitchComponent
            checked={checkboxState}
            handleCheckboxChange={handleCheckboxChange}
          />
          <Pre>
            Session: {sessionState},_Checkbox:{" "}
            {checkboxState ? "true" : "false"}
          </Pre>
          <Pre>
            window.localStorage object -_
            <span>{localStorage}</span>
          </Pre>
          <Pre> >{fData}</Pre>
          <ButtonsWrapper>
            <button className="btn btn-outline-secondary" onClick={saveToken}>
              Save Token
            </button>
            <button className="btn btn-outline-dark" onClick={getToken}>
              Get Token
            </button>
            <button className="btn btn-outline-success" onClick={checkUserData}>
              Fetch Loans
            </button>
            <button className="btn btn-outline-primary" onClick={login}>
              Login
            </button>
            <button className="btn btn-outline-danger" onClick={logout}>
              Logout
            </button>
          </ButtonsWrapper>
        </div>
      </ControlsWrapper>
      <LoansDisplay loansList={loans} />
    </Wrapper>
  );
};

export default CirqaOA;
