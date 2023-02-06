import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getProductByAll } from "../service/shopService";

const Search = () => {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <SearchArea>
      <SearchBar
        type="text"
        placeholder="검색"
        value={text}
        onChange={handleChange}
      />
      {text ? (
        <SearchList>
          <SearchItem>
            John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain
            Bracelet
          </SearchItem>
        </SearchList>
      ) : null}
    </SearchArea>
  );
};

export default Search;

const SearchArea = styled.section`
  position: relative;
  display: inline-block;
`;

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

const SearchList = styled.ul`
  position: absolute;
  margin-top: 8px;
  width: 256px;
  height: auto;
  max-height: 384px;
  overflow: auto;
  z-index: 1;
  background-color: #4b5563;
`;

const SearchItem = styled.li`
  padding: 12px 16px;
  font-size: 15px;
  line-height: 1.5;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    border-radius: 5px;
    background-color: #dbdbdb1c;
  }

  &: active {
    background-color: #6419e6;
  }
`;
