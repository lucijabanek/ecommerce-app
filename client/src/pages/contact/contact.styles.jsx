import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 55%;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
    width: 80%;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

export const InformationContainer = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;

  @media screen and (max-width: 800px) {
    padding-top: 20px;
    margin: 0;
  }
`;
export const SpanIcon = styled.span`
  padding: 10px;
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
export const SpanTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const SpanSubitle = styled.span`
  font-size: 16px;
`;

export const EmailContainer = styled.div`
  display: flex;
  width: 400px;
  padding-bottom: 10px;
`;
