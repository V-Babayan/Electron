import styled, { css } from "styled-components";

export const DropContainer = styled.div`
  position: relative;

  :hover {
    svg {
      transform: rotateZ(180deg);
    }
  }
`;

export const DropButton = styled.div`
  padding: ${({ theme }) => theme.ratio(10, 14, "mobileS")};
  font-size: 16px;
  line-height: 1.5;

  ${({ primary }) =>
    primary &&
    css`
      font-weight: 500;
      color: #ffffff;
      background: ${({ theme }) => theme.color.orange};

      display: inline-block;
      padding-left: 14px;
    `}

  & > svg {
    transition: transform 0.1s linear;
    stroke: ${({ primary }) => (primary ? "#ffffff" : "#292d32")};

    margin-left: 16px;
  }
`;

export const DropList = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;

  ${({ primary }) => primary && "color: #ffffff"};
  text-align: center;

  li {
    a {
      display: block;
      padding: 10px 0;
    }

    transition: background 0.1s linear;
  }
`;
