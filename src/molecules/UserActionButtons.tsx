import React from "react";
import styled from "styled-components";

const UserActionButtons = ({
  imgUrl,
  text,
  quant,
  color,
}: {
  imgUrl: string;
  text: string;
  quant: string;
  color: string;
}) => {
  return (
    <UserActionIconsCont color={color}>
      <UserActionIcons src={imgUrl} />
      <UserActionText>{text}</UserActionText>
      <UserActionQuant>{quant}</UserActionQuant>
    </UserActionIconsCont>
  );
};

export default UserActionButtons;

const UserActionIconsCont = styled.div<{ color: string }>`
  padding: 10px 17px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  max-height: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

const UserActionIcons = styled.img`
  width: 66px;
  height: 66px;
`;
const UserActionText = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;

const UserActionQuant = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.87);
`;
