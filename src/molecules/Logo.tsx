import React from 'react'
import styled from "styled-components";
import theme from "../../styled/theme";


function Logo() {
  return (
    <LogoWrapper>
      <LogoCont>
        <img src="/icons/logo.svg" alt="logo" />
        <LogoText>Libroox</LogoText>
      </LogoCont>
    </LogoWrapper> 
  )
}

export default Logo

const LogoWrapper = styled.div`
  display: flex;
`
const LogoCont=styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoText=styled.p`
  color: #fff ;
  margin-left:5px;
  font-weight:500;
  font-size: 24px;

`