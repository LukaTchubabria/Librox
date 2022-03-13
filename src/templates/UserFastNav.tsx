import React from "react";
import styled from "styled-components";
import UserActionButtons from "../molecules/UserActionButtons";

const data = [
  {
    id: 1,
    imgUrl: "/images/chat.png",
    text: "Message",
    quant: "143",
    color: "rgba(122, 202, 217, 0.8)",
  },
  {
    id: 2,
    imgUrl: "/images/shopping-basket.png",
    text: "My Story",
    quant: "123",
    color: "rgba(85, 126, 255, 0.8)",
  },
  {
    id: 3,
    imgUrl: "/images/coin.png",
    text: "Balance",
    quant: "20.5",
    color: "rgba(254, 168, 87, 0.8)",
  },
];

const UserFastNav = () => {
  return (
    <UserFastNavCont>
      <UserNavDecoration
        src="/icons/decoration.svg"
        alt="decoration"
      ></UserNavDecoration>
      <UserImg src="/images/user-2.png" alt="user" />
      <UserName>Luka Tchubabria</UserName>
      <UserIconsCont>
        {data.map((itme) => (
          <UserActionButtons
            key={itme.id}
            imgUrl={itme.imgUrl}
            text={itme.text}
            quant={itme.quant}
            color={itme.color}
          />
        ))}
      </UserIconsCont>
    </UserFastNavCont>
  );
};

export default UserFastNav;

const UserFastNavCont = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.14);
  border-radius: 20px;
`;

const UserNavDecoration = styled.img``;
const UserImg = styled.img`
  width: 140px;
  height: 140px;
  position: absolute;
  left: 50%;
  top: 31px;
  transform: translateX(-47%);
`;
const UserName = styled.h4`
  text-align: center;
  margin-top: 30px;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;

  color: #bfc9d1;
`;
const UserIconsCont = styled.div`
  margin: 15px 20px 21px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 21px;
`;
