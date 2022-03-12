import React from "react";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <SearchInputCont>
      <SearchIcon />
    </SearchInputCont>
  );
};

export default SearchInput;

const SearchInputCont = styled.input`
  padding: 10px 15px;

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.color.font_white_2};
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;
