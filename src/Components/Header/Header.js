import React from "react";
import styled from "styled-components";
import { Link as UnstyledLink } from "react-router-dom";

const HeaderStyling = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 5px 15px 5px 15px;
  margin: 0px;
`;

const Logo = styled.span`
  color: #7a82ab;
  font-family: Verdana;
  font-size: 1.5em;
  font-weight: bold;
`;

const NavButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const StyledLink = styled.div`
  & a {
    color: #7a82ab;
    font-size: 1em;
    font-weight: bold;
    padding-left: 10px;
    text-decoration: none;
  }
  & a:hover {
    color: #c0d6df;
  }
`;

const Link = ({ to, name }) => (
  <StyledLink>
    <UnstyledLink to={to}>{name}</UnstyledLink>
  </StyledLink>
);

const Header = () => {
  return (
    <HeaderStyling>
      <Logo>
        React-OAuth <span style={{ color: "#a0c0ce" }}>Prototype</span>
      </Logo>
      <NavButtons>
        <Link to="/" name="Landing" />
        <Link to="/popup.html" name="CirqaOAuth" />
        <Link to="/login" name="Login Page" />
      </NavButtons>
    </HeaderStyling>
  );
};

export default Header;
