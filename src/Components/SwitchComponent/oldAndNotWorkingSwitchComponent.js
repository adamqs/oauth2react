import React from "react";
import styled from "styled-components";

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
  background-color: blue;
  &:focus {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 34px;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  ${Switch}:checked & {
    background-color: #2196f3;
  }

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

const SwitchComponent = () => {
  return (
    <div>
      <Switch>
        <Checkbox />
        <Slider></Slider>
      </Switch>
    </div>
  );
};

export default SwitchComponent;
