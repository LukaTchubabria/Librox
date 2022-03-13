import React from "react";
import styled from "styled-components";

const SearchInput = () => {
  return (
    <SearchInputCont>
      <SeatchInput type="text" />
      <SearchIcon src="/icons/search.svg" alt="search" />
    </SearchInputCont>
  );
};

export default SearchInput;

const SearchInputCont = styled.div`
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  display: flex;
  align-self: center;
`;

const SeatchInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  width: 100%;

  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  font-size: 14px;
  line-height: 21px;

  border: none;
  outline: none;

  &::placeholder {
    font-style: italic;
    font-size: 14px;
    line-height: 21px;
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`;
