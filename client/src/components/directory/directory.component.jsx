import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenuContainer } from "./directory.styles";

//we need to store the state value of menu items that we want to pass and create our menu items with
const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections?.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStatetoProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStatetoProps)(Directory);
