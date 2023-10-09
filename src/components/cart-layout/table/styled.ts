import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const Table = styled.table`
  margin-bottom: ${({ theme }) => theme.ratio(10, 46, EDeviceNames.mobileS)};
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.ratio(10, 55, EDeviceNames.mobileS)};
  row-gap: 10px;

  flex-wrap: wrap;
  button {
    border-radius: 35px;

    font-size: ${({ theme }) => theme.ratio(16, 6, EDeviceNames.mobileS)};
  }
`;

export { ButtonsContainer, Table };
