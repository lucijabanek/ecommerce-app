import React from "react";

import EmailInput from "../../components/form-email/form-email.component";

import {
  ContactContainer,
  HeaderContainer,
  InformationContainer,
  SpanIcon,
  SpanContainer,
  SpanTitle,
  SpanSubitle,
  EmailContainer,
} from "./contact.styles";

const ContactPage = () => (
  <div>
    <HeaderContainer>
      Are you a customer who needs help? Get in touch with us!
    </HeaderContainer>
    <hr />
    <ContactContainer>
      <InformationContainer>
        <SpanIcon style={{ fontSize: "25px" }}>&#127980;</SpanIcon>
        <SpanContainer>
          <SpanTitle>Adress</SpanTitle>
          <SpanSubitle>Adresa 1, Neverland</SpanSubitle>
        </SpanContainer>
        <SpanIcon style={{ fontSize: "25px" }}>&#128222;</SpanIcon>
        <SpanContainer>
          <SpanTitle>Phone</SpanTitle>
          <SpanSubitle>+385 91 000 0000</SpanSubitle>
        </SpanContainer>
        <SpanIcon style={{ fontSize: "35px" }}>&#9993;</SpanIcon>
        <SpanContainer>
          <SpanTitle>Email</SpanTitle>
          <SpanSubitle>email@email.com</SpanSubitle>
        </SpanContainer>
      </InformationContainer>
      <EmailContainer>
        <EmailInput />
      </EmailContainer>
    </ContactContainer>
  </div>
);

export default ContactPage;
