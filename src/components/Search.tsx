import React from "react";
import styled from "@emotion/styled";

const Search = () => {
  return (
    <section>
      <SearchBar type="text" placeholder="검색" />
    </section>
  );
};

export default Search;

const SearchBar = styled.input`
  width: 222px;
  height: 48px;
  padding: 0 16px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  background-color: #4b5563;

  &:focus {
    outline: none;
  }
`;
