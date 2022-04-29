import styled from "styled-components";

const ProductList = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(200px, auto);
  gap: ${({ theme }) => theme.ratio(10, 15, "mobileS")};

  @media screen and (${({ theme }) => theme.media("mobile")}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${({ theme }) => theme.media("tablet")}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${({ theme }) => theme.media("notebook")}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { ProductList };
