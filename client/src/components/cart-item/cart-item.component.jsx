import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from "./cart-item.styles";

const CartItem = ({ item, addItem, clearItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span>{name}</span>
        <QuantityContainer>
          <div onClick={() => removeItem(item)}>&#10094;</div>
          {quantity}
          <div onClick={() => addItem(item)}>&#10095;</div>${quantity * price}
        </QuantityContainer>
      </ItemDetailsContainer>
      <RemoveButtonContainer onClick={() => clearItem(item)}>
        &#10005;
      </RemoveButtonContainer>
    </CartItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(React.memo(CartItem));
