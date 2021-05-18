import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  cursor: pointer;
`;

export const RemoveButtonContainer = styled.div`
  margin-right: 5px;
  cursor: pointer;
`;
