import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.ratio(10, 40, "mobileS")};
  margin-bottom: 20px;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    grid-template-columns: 1fr 1fr;
  }
`;
