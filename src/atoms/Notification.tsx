import React from "react";
import styled from "styled-components";

const Notification = () => {
  return (
    <NotificationWrapper>
      <img src="/icons/bell.svg" alt="bell" />
    </NotificationWrapper>
  );
};

export default Notification;

const NotificationWrapper = styled.div<{ active?: boolean }>`
  position: relative;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 50%;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &::before {
    content: "";
    width: 13px;
    height: 13px;
    position: absolute;
    top: 0px;
    right: 0;
    border-radius: 50%;
    background: #91b8da;
  }
`;
