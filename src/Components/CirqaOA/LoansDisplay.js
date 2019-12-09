import React from "react";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

const ListElement = styled.li`
  background-color: #7a82ab;
  color: #f1fffa;
  list-style: none;
  border-radius: 4px;
  font-size: 0.7em;
  padding: 0.5em;
  margin-bottom: 1.5em;
`;

const LoansDisplay = props => {
  return (
    <ListWrapper>
      <ul>
        {props.loansList.map(loan => (
          <ListElement key={loan.id}>
            <p>AccNo: {loan.accno}</p>
            <p>Author: {loan.authorapi}</p>
            <p>Title: {loan.titlesort}</p>
          </ListElement>
        ))}
      </ul>
    </ListWrapper>
  );
};

export default LoansDisplay;
