import React from "react";
import styled from "styled-components";

const CategoryBox = ({
  iconUrl,
  name,
  color,
}: {
  iconUrl: string;
  name: string;
  color: string;
}) => {
  return (
    <CategoryMainBox>
      <CategoryIconCont>
        <CategoryIcons src={iconUrl} alt={name}></CategoryIcons>
      </CategoryIconCont>
      <CategoryName>{name}</CategoryName>
    </CategoryMainBox>
  );
};

export default CategoryBox;

const CategoryMainBox = styled.div`
  width: 101px;
  padding: 8px 8px 5px 8px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CategoryIconCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35px;
  height: 35px;

  background: #e7f1f9;
  border-radius: 10px;
`;
const CategoryIcons = styled.img``;
const CategoryName = styled.h4`
  margin-top: 7px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: #7acad9;
`;
