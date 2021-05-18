import React from "react";
import Menu from "@material-ui/core/Menu";
import { OptionLink, MenuDiv } from "./menu-shop.styles";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <MenuDiv
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        SHOP
      </MenuDiv>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <OptionLink to="/shop" onClick={handleClose}>
          Shop now
        </OptionLink>
        <OptionLink to="/shop/mens" onClick={handleClose}>
          Mens
        </OptionLink>
        <OptionLink to="/shop/womens" onClick={handleClose}>
          Womens
        </OptionLink>
        <OptionLink to="/shop/hats" onClick={handleClose}>
          Hats
        </OptionLink>
        <OptionLink to="/shop/jackets" onClick={handleClose}>
          Jackets
        </OptionLink>
        <OptionLink to="/shop/sneakers" onClick={handleClose}>
          Sneakers
        </OptionLink>
      </Menu>
    </div>
  );
}
