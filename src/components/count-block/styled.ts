import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const CountBlock = styled.div<{ $responsive: boolean }>`
  font-size: 18px;
  line-height: 1.5;

  background: #eeeeee;
  border: 1px solid #bdbdbd;

  display: inline-grid;
  grid-template-columns: 35px ${({ theme, $responsive }) =>
      $responsive ? theme.ratio(23, 40, EDeviceNames.mobileS) : "63px"} 35px;

  span {
    justify-self: center;
  }
  button {
    background: #eeeeee;
    border: 1px solid #bdbdbd;

    &:hover {
      background: #cccccc;
    }
  }
`;

export { CountBlock };
