import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Logo from "../molecules/Logo";
import Navlinks from "../molecules/Navlinks";

const Navdata = [
  {
    iconUrl: "/icons/homelogo.svg",
    text: "Home",
    url: "/",
  },

  {
    iconUrl: "/icons/profilelogo.svg",
    text: "Profile",
    url: "/profile",
  },

  {
    iconUrl: "/icons/categorylogo.svg",
    text: "Category",
    url: "/category",
  },

  {
    iconUrl: "/icons/messagelogo.svg",
    text: "Message",
    url: "/message",
  },

  {
    iconUrl: "/icons/settingslogo.svg",
    text: "Settings",
    url: "/settings",
  },

  {
    iconUrl: "/icons/helpslogo.svg",
    text: "Helps",
    url: "/helps",
  },
];

function Navigation() {
  const router = useRouter();
  return (
    <MainContainer>
      <Logo />
      <NavList>
        {Navdata.map((item, i) => (
          <Link href={item.url} key={i}>
            <a>
              <Navlinks
                active={item.url === router.pathname}
                text={item.text}
                iconUrl={item.iconUrl}
              />
            </a>
          </Link>
        ))}
      </NavList>
    </MainContainer>
  );
}

export default Navigation;

const MainContainer = styled.div`
  margin: 20px 0 33px 30px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 20px;
`;

const NavList = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;
