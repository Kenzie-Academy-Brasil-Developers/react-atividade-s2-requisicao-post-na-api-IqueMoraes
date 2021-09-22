import React from "react";
import styled from "styled-components";

const Container = styled.form`
  background-color: rgb(231, 125, 71);
  border: 3px solid whitesmoke;
  border-radius: 3px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const MyInput = styled.input`
  background-color: rgb(73, 132, 155);
  border-bottom: 3px solid rgb(71, 78, 157);
  border-radius: 5px;

  &::focus {
    background-color: rgb(51, 173, 191);
  }
`;

const MyButton = styled.button`
  background-color: rgb(73, 146, 155);
  border: 3px solid rgb(71, 78, 157);
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

export { Container, MyInput, MyButton };
