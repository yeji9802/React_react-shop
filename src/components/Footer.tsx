import React from "react";
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <FooterArea>
      <LinkZB href="https://zero-base.co.kr/">제로베이스</LinkZB>
      <p>Copyright © 2022 Zero Base</p>
    </FooterArea>
  );
};

export default Footer;

const FooterArea = styled.footer`
  display: grid;
  align-items: center;
  padding: 40px;
  height: 208px;
  text-align: center;
  color: #a6adba;
  background-color: #242933;
`;

const LinkZB = styled.a`
  color: inherit;
`;
