import React from "react";
import styled from "styled-components";
import theme from "../../styled/theme/theme";

type Text = {
  text: string | number;
};

const Button: React.FC<Text> = ({ text }) => {
  return <ButtonWrapper>{text}</ButtonWrapper>;
};

export default Button;

const ButtonWrapper = styled.button`
  padding: 4px 24px;
  background-color: #264054;
  border-radius: 10px;

  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color.black};

  border: none;
  outline: none;
`;
