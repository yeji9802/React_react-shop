import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Product } from "../model/Product";

interface ProductProps {
  product: Product;
}

const ShopList = (props: ProductProps) => {
  const { product } = props;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const price = Math.round(product.price);

  return (
    <Item onClick={handleClick}>
      <ImgaeArea>
        <Image src={`${product.image}`} alt={`${product.title}`} />
      </ImgaeArea>
      <DescriptionArea>
        <Description>{product.title}</Description>
        <Price>{`$${price}`}</Price>
      </DescriptionArea>
    </Item>
  );
};

export default ShopList;

const Item = styled.li`
  width: 310px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: #ffffff;
`;

const ImgaeArea = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 310px;

  &:hover img {
    transform: scale(1.4);
  }
`;

const Image = styled.img`
  max-width: 50%;
  max-height: 50%;
  transition: all 0.3s linear;
`;

const DescriptionArea = styled.div`
  display: grid;
  align-items: center;
  padding: 32px;
  height: 115px;
  background-color: #374151;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Description = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #a6adba;
`;

const Price = styled.p`
  color: #a6adba;
`;
