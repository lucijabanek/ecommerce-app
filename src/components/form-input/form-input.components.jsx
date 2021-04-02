import React from "react";

import "./form-input.styles.scss";

//we need handleChange because we want to bubble up any on change that
//the input has
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""}form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
