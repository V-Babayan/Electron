import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

export const CartItem = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  text-align: center;

  border-bottom: 1px solid #c3c3c3;

  td {
    :first-child {
      flex: 1 1 66%;
    }

    flex: 1 1 33%;
    padding: 25px 0;
    border-bottom: none;
  }

  button:hover {
    filter: contrast(50%);
  }
  @media screen and (${({ theme }) => theme.media(EDeviceNames.mobileL)}) {
    display: table-row;
    border-bottom: none;

    td {
      border-bottom: 1px solid #c3c3c3;
    }
  }
`;

export const Figure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(5, 15, EDeviceNames.mobileS)};

  div {
    flex: 0 0 50%;
    position: relative;
    padding-bottom: 40%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
  figcaption {
    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio(16, 4, EDeviceNames.mobileS)};
    line-height: 1.5;

    color: ${({ theme }) => theme.color.blue};
  }
`;
