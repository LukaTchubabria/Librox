import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from "../src/atoms/Button";
import Header from "../src/templates/Header";

const data = [{ a: "follow" }, { a: "follow" }, { a: "follow" }];

const Home: NextPage = () => {
  const [a, setA] = useState<number>(0);
  return (
    <MainWrapper>
      <Header></Header>
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div``;
