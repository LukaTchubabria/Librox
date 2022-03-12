import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";
import Button from "../src/atoms/Button";
import Header from "../src/templates/Header";
import Navigation from "../src/templates/Navigation";

const Home: NextPage = () => {
  const [a, setA] = useState<number>(0);
  return (
    <MainWrapper>
      <Header></Header>
      <Navigation />
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div``;
