import { Link } from "react-router-dom";

import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.notebook)}) {
    flex-direction: row;

    & > div {
      flex: 1 1 70%;
    }
    & > section {
      flex: 1 1 auto;
    }
  }
`;

export const CartEmptyBlock = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: ${({ theme }) => theme.ratio(16, 16, EDeviceNames.mobileS)};
`;

export const HomeLink = styled(Link)`
  color: #008cff;
  font-weight: 700;

  &:hover {
    color: #008cff85;
  }
`;
