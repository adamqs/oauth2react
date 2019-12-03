import React, { useState, useEffect } from "react";
import { apiBaseUrl, apiVersion } from "../../settings";
// import queryString from "query-string";
import LoansDisplay from "./LoansDisplay";

const CirqaOA = props => {
  let [fData, setFData] = useState("...loading");
  let [loans, setLoans] = useState([]);

  // useEffect(() => {
  //   let tempQuery = queryString.parse(window.location.href);
  //   if (typeof tempQuery === "object") {
  //     console.log(tempQuery.access_token);
  //     setToken(tempQuery.access_token);
  //   } else {
  //     console.log("invalid token");
  //   }
  //   console.log("effect");
  // }, []);

  const log = () => {
    console.log(props.token);
  };

  const test = () => {
    fetch("http://kima:56778/CirqaIdentity/csp/report", {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => {
        console.log("fetched: ");
        console.log(data);
      });
  };

  const checkUserData = () => {
    let uri = `${apiBaseUrl}/${apiVersion}/readers/r0009/loans`;
    console.log(uri);
    fetch(uri, {
      headers: { Authorization: "Bearer " + props.token },
      method: "GET",
      dataType: "json"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFData("loaded");
        setLoans(data.loansCollection.collection);
      });
  };

  return (
    <div className="wrapper">
      <div className="controls">
        <pre
          style={{
            backgroundColor: "gray",
            border: "solid 1px darkgray"
          }}
        >
          {fData}
        </pre>
        <button className="btn btn-primary" onClick={log}>
          Log
        </button>
        <button className="btn btn-secondary" onClick={test}>
          test connection
        </button>
        <button className="btn btn-success" onClick={checkUserData}>
          Check Loans
        </button>
      </div>
      <LoansDisplay loansList={loans} />
    </div>
  );
};

export default CirqaOA;
