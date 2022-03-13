import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <LogoWrapper>
      <LogoCont>
        <img src="/icons/logo.svg" alt="logo" />
      </LogoCont>
      <LogoText>Libroox</LogoText>
    </LogoWrapper>
  );
}

export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LogoCont = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const LogoText = styled.p`
  color: #fff;
  margin-left: 5px;
  font-weight: 500;
  font-size: 24px;
`;
