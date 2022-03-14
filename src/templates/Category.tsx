import React from "react";
import styled from "styled-components";
import CategoryBox from "../atoms/CategoryBox";

const category = [
  { imgUrl: "", color: "#7ACAD9", name: "Fantasy" },
  { imgUrl: "", color: "#557EFF", name: "Romance" },
  { imgUrl: "", color: "#CE8B65", name: "Thriller" },
  { imgUrl: "", color: "#91B8DA", name: "Fantasy" },
  { imgUrl: "", color: "#FEA857", name: "Romance" },
  { imgUrl: "", color: "#567895", name: "More" },
];

const Category = () => {
  return (
    <CategoryWrapper>
      <CategoryTitle>Category</CategoryTitle>
      <CategroyItems>
        {category.map((item, i) => (
          <CategoryBox
            key={i}
            iconUrl={item.imgUrl}
            name={item.name}
            color={item.color}
          />
        ))}
      </CategroyItems>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div``;

const CategoryTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  color: rgba(255, 255, 255, 0.87);
`;

const CategroyItems = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
