import styled, { css } from "styled-components";

export const DropContainer = styled.div`
  position: relative;
`;

export const DropButton = styled.div`
  padding: ${({ theme }) => theme.ratio.smallPhone(10, 14)};
  font-size: 16px;
  line-height: 1.5;

  ${({ primary }) =>
    primary &&
    css`
      font-weight: 500;
      color: #ffffff;
      background: #eda415;

      display: inline-block;
      padding-left: 14px;
    `}

  & > svg {
    transition: transform 0.1s linear;
    ${({ show }) => show && "transform: rotateZ(180deg)"};
    stroke: ${({ primary }) => (primary ? "#ffffff" : "#292d32")};

    margin-left: 16px;
  }
`;

export const DropList = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;

  color: ${({ primary }) => (primary ? "#ffffff" : "inherit")};
  text-align: center;
`;

export const DropItem = styled.li`
  padding: 10px 0;
  background: ${({ primary }) => (primary ? "#eda415" : "#f4f4f4")};

  transition: background 0.1s linear;

  &:hover {
    background: ${({ primary }) => (primary ? "#d8971a" : "#cdcdcd")};
  }
  ${({ primary }) => primary && "border-top: 1px solid #ffffff"};
`;
