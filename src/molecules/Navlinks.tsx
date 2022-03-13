import { text } from "node:stream/consumers";
import React from "react";
import styled from "styled-components";

function Navlinks({
  text,
  iconUrl,
  active,
}: {
  text: string;
  iconUrl: string;
  active: boolean;
}) {
  return (
    <MainLink active={active}>
      <img src={iconUrl} alt="" />
      <Navtext>{text}</Navtext>
    </MainLink>
  );
}

export default Navlinks;

const MainLink = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  color: #fff;

  cursor: pointer;

  opacity: ${(props) => (props.active ? 1 : 0.87)};
`;
const Navtext = styled.p`
  margin-left: 15px;

  font-weight: 400;
  font-size: 16px;
`;
