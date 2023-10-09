import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const ButtonsContainer = styled.div`
  height: calc(37% - 25px);

  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  &:first-child {
    white-space: nowrap;
  }

  padding: ${({ theme }) =>
    `${theme.ratio(7, 8, EDeviceNames.mobileS)} ${theme.ratio(
      5,
      17,
      EDeviceNames.mobileS
    )}`};
  border-radius: ${({ theme }) => theme.ratio(15, 5, EDeviceNames.mobileS)};

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  background: ${({ theme }) => theme.color.lightblue};
  color: #272727;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:hover {
    background: #51a3d0;
  }
`;
const IconBlock = styled.div`
  height: 30px;
  width: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.color.orange};
  border-radius: 50%;
  svg {
    height: 17px;
  }
`;

export { Button, ButtonsContainer, IconBlock };
