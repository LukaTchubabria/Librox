import { text } from 'node:stream/consumers';
import React from 'react'
import styled from "styled-components";

function Navlinks({text, iconUrl}: {text:string, iconUrl:string}) {
  return (
    <MainLink>
        <img src={iconUrl} alt="" />
        <Navtext>{text}</Navtext>
    </MainLink>
  )
}

export default Navlinks;

const MainLink = styled.div`
    display: flex;
`
const Navtext = styled.p`
    color: #fff;
    font-weight: 400;
    font-size: 16px;
`