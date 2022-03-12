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

const NotificationWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: -10px;
    left: 0;
  }
`;
