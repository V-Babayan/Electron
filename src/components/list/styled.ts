import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const ProductList = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 355px;
  gap: ${({ theme }) => theme.ratio(10, 15, EDeviceNames.mobileS)};

  @media screen and (${({ theme }) => theme.media(EDeviceNames.mobile)}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (${({ theme }) => theme.media(EDeviceNames.notebook)}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export { ProductList };
