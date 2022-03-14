import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Button from "../src/atoms/Button";
import Filter from "../src/organisms/FIlter";
import Category from "../src/templates/Category";
import FilterBooks from "../src/templates/FilterBooks";
import Header from "../src/templates/Header";
import Navigation from "../src/templates/Navigation";
import Recommend from "../src/templates/Recommend";
import SuggestedAuthor from "../src/templates/SuggestedAuthor";
import UserFastNav from "../src/templates/UserFastNav";

const Home: NextPage = () => {
  const [a, setA] = useState<number>(0);
  return (
    <MainPageWrapper>
      <MainWrapper>
        <Category />
        <Recommend />
        <FilterBooks />
      </MainWrapper>
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

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
