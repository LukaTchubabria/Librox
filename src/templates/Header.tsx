import React from "react";
import styled from "styled-components";
import SearchInput from "../organisms/SearchInput";
import Notification from "../atoms/Notification";
import UserNav from "../organisms/UserNav";

const Header = () => {
  return (
    <HeaderTemplate>
      <SearchInput></SearchInput>
      <Notification></Notification>
      <UserNav></UserNav>
    </HeaderTemplate>
  );
};

export default Header;

const HeaderTemplate = styled.div`
  padding: 20px 25px;
  display: flex;

  background: rgba(255, 255, 255, 0.14);
  border-radius: 0px 0px 0px 20px;
`;
