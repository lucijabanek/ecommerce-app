import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartDropDownButton,
  EmptyMessageContainer,
  CartItemsContainer,
  TotalContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch, total }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty.</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>
    <CartDropDownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropDownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
