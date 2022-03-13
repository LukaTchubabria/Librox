import React from "react";
import styled from "styled-components";
import SearchInput from "../organisms/SearchInput";
import Notification from "../atoms/Notification";
import UserNav from "../organisms/UserNav";

const Header = () => {
  return (
    <HeaderTemplate>
      <SearchInput />
      <UserInfoBlock>
        <Notification />
        <UserNav />
      </UserInfoBlock>
    </HeaderTemplate>
  );
};

export default Header;

const HeaderTemplate = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 382px;
  padding: 20px 30px 20px 25px;

  background: rgba(255, 255, 255, 0.14);
  border-radius: 0px 0px 0px 20px;
`;

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 25px;
`;
