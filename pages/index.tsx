import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Button from "../src/atoms/Button";
import Header from "../src/templates/Header";
import Navigation from "../src/templates/Navigation";
import SuggestedAuthor from "../src/templates/SuggestedAuthor";
import UserFastNav from "../src/templates/UserFastNav";

const Home: NextPage = () => {
  const [a, setA] = useState<number>(0);
  return (
    <MainPageWrapper>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, nobis.
        Necessitatibus fugit ipsum neque odit deleniti debitis beatae id iste
        eaque nulla repudiandae aperiam sit, veritatis cupiditate earum, sunt
        at!
      </div>
      <RightSideCont>
        <UserFastNav />
        <SuggestedAuthor />
      </RightSideCont>
    </MainPageWrapper>
  );
};

export default Home;

const MainPageWrapper = styled.div`
  padding: 30px 30px 0 0;
  display: grid;
  grid-template-columns: 1fr 382px;
  gap: 30px;
`;

const RightSideCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
