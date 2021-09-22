import React from "react";
import styled from "styled-components";

const MyInput = styled.input`
  background-color: rgb(73, 132, 155);
  border-bottom: 3px solid rgb(71, 78, 157);
  border-radius: 5px;

  &::focus {
    background-color: rgb(51, 173, 191);
  }
`;

export default MyInput;
