import React, { useState } from "react";
import styled from "styled-components";
import { apiBaseUrl, apiVersion } from "../../settings";
// import queryString from "query-string";
import LoansDisplay from "./LoansDisplay";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* border: solid 1px black; */
  padding-top: 1em;
`;

const ControlsWrapper = styled.div`
  width: 270px;
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
      })
      .catch(er => {
        console.log(`An error has occured sir! Here are some details: ${err}`);
      });
  };

  return (
    <Wrapper>
      <ControlsWrapper>
        <div className="controls">
          <Pre> >{fData}</Pre>
          <ButtonsWrapper>
            <button className="btn btn-outline-primary" onClick={log}>
              Log
            </button>
            <button className="btn btn-outline-secondary" onClick={test}>
              test connection
            </button>
            <button className="btn btn-outline-success" onClick={checkUserData}>
              Loans
            </button>
          </ButtonsWrapper>
        </div>
      </ControlsWrapper>
      <LoansDisplay loansList={loans} />
    </Wrapper>
  );
};

export default CirqaOA;
