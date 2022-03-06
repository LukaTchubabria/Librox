import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Button from "../components/atom/Button";

const data = [{ a: "follow" }, { a: "follow" }, { a: "follow" }];

const Home: NextPage = () => {
  const [a, setA] = useState<number | undefined>();
  return (
    <MainWrapper>
      <Text>kldfghj;lsdfg</Text>
      <Text>kldfghj;lsdfg</Text>
      <Text>aflsdkf</Text>
      {data.map((item, i) => (
        <Button key={i} text={item.a}></Button>
      ))}
      <Link href="/contact">fasdljkfha</Link>
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div`
  display: grid;
  background-color: black;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;

  color: rgba(255, 255, 255, 0.87);
`;
