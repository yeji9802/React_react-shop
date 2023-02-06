import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

import { cartState, modalState } from "../states/atoms";

const Modal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [cart, setCart] = useRecoilState(cartState);

  const handleRemove = () => {
    setCart([]);
    setModal(false);
  };
  const handleNo = () => {
    setModal(false);
  };

  return (
    <ModalArea>
      <ModalBox>
        <Title>정말로 구매하시겠습니까?</Title>
        <TitleSub>장바구니의 모든 상품들이 삭제됩니다.</TitleSub>
        <ButtonArea>
          <BtnYes onClick={handleRemove}>네</BtnYes>
          <BtnNo onClick={handleNo}>아니요</BtnNo>
        </ButtonArea>
      </ModalBox>
    </ModalArea>
  );
};

export default Modal;

const ModalArea = styled.section`
  position: fixed;
  display: flex;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.div`
  display: inline-grid;
  padding: 24px;
  width: 464px;
  height: 156px;
  border-radius: 10px;
  background-color: #2a303c;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #a6adba;
`;

const TitleSub = styled.p`
  padding: 16px 0;
  font-size: 16px;
  color: #a6adba;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BtnYes = styled.button`
  padding: 0 16px;
  color: #ffffff;
  background-color: #641ae6;
  border: 0px;
  border-radius: 10px;

  &:hover {
    background-color: #4a08bd;
  }
`;

const BtnNo = styled.button`
  padding: 0 16px;
  margin-left: 8px;
  color: #a6adba;
  background-color: inherit;
  border: 1px solid #a6adba;
  border-radius: 10px;

  &:hover {
    color: inherit;
    background-color: #a6adba;
  }
`;
