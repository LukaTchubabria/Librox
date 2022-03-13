import React from "react";
import styled from "styled-components";

const UserNav = () => {
  return (
    <UserNavCont>
      <img src="/images/person.png" alt="person" />
      <UserName>Luka Tchubabria</UserName>
      <img src="/icons/down-arrow.svg" alt="down-arrow" />
    </UserNavCont>
  );
};

export default UserNav;

const UserNavCont = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  margin: 0 10px 0 20px;
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.87);
`;
