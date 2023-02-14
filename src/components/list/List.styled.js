import styled from "styled-components";

export const SHeading = styled.h5`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.5;

  color: #1b5a7d;
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(15, 40)};
`;

export const ProductList = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(200px, auto);
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 15)};

  @media screen and (${({ theme }) => theme.media.MaxNotebook}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${({ theme }) => theme.media.MaxSmallMobile}) {
    grid-template-columns: 1fr;
  }
`;
