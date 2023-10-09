import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.ratio(10, 40, EDeviceNames.mobileS)};
  margin-bottom: 20px;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    grid-template-columns: 1fr 1fr;
  }
`;
