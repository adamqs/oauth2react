import React from "react";

const LoansDisplay = props => {
  return (
    <div>
      <ul>
        {props.loansList.map(loan => (
          <li style={{ backgroundColor: "gray", color: "white" }}>
            <p>AccNo: {loan.accno}</p>
            <p>Author: {loan.authorapi}</p>
            <p>Title: {loan.titlesort}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LoansDisplay;
