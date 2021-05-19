import React, { useState } from "react";
import { send } from "emailjs-com";

import FormInput from "../form-input/form-input.components";
import CustomButton from "../custom-button/custom-button.component";

const EmailInput = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_5i4714i",
      "template_k6p2u1l",
      toSend,
      "user_2Ah4ROOd4kqcIHmQQG96H"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({ from_name: "", message: "", reply_to: "" });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit} style={{ width: "350px" }}>
      <div style={{ fontSize: "25px" }}>Send us email:</div>
      <FormInput
        type="text"
        name="from_name"
        label="From name"
        value={toSend.from_name}
        onChange={handleChange}
        required
      />
      <FormInput
        type="text"
        name="reply_to"
        label="Your email"
        value={toSend.reply_to}
        onChange={handleChange}
        required
      />
      <FormInput
        type="text"
        name="message"
        label="Your message"
        value={toSend.message}
        onChange={handleChange}
      />
      <CustomButton type="submit">Submit</CustomButton>
    </form>
  );
};

export default EmailInput;
