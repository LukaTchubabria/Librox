import React, { useState } from "react";
import styled from "styled-components";

const filterBtnData = [
  { id: 1, name: "Newest" },
  { id: 2, name: "Popular" },
  { id: 3, name: "Fearuted" },
];

const Filter = () => {
  const [activeBtn, setActiveBtn] = useState<number>(1);
  return (
    <FilterWrapper>
      {filterBtnData.map((item) => (
        <FilterBtn
          key={item.id}
          onClick={() => setActiveBtn(item.id)}
          active={activeBtn === item.id}
        >
          \{item.name}
        </FilterBtn>
      ))}
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  width: 50%;
`;

const FilterBtn = styled.button<{ active?: boolean }>`
  max-width: 106px;
  height: 37px;
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.14)" : "rgba(255, 255, 255, 0.12)"};

  color: ${(props) =>
    props.active
      ? "color: rgba(255, 255, 255, 0.87)"
      : "color: rgba(255, 255, 255, 0.6)"};
`;
