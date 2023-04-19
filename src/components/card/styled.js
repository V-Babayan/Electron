import styled from "styled-components";

const Container = styled.div`
  height: ${({ theme }) => theme.ratio(275, 500, "mobileS")};
  padding: 23px 13px;

  border: 1px solid #b6b6b6;
  border-radius: 20px;

  font-size: 16px;
  line-height: 1.6;

  @media screen and (${({ theme }) => theme.media("mobile")}) {
    height: auto;
  }
`;

export { Container };
