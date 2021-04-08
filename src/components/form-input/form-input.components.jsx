import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

//we need handleChange because we want to bubble up any on change that
//the input has
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel className={`${otherProps.value.length ? "shrink" : ""}`}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);
export default FormInput;
