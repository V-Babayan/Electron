import styled, { css } from "styled-components";

const ButtonsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.ratio(8, 20, "mobileS")};

  font-size: 14px;
  line-height: 1.5;

  margin-left: auto;
`;

const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(5, 7, "mobileS")};
  color: #ffffff;

  transition: color 0.1s linear;

  div {
    position: relative;
    display: flex;
    align-items: center;
    gap: 3px;

    ${({ cartSize }) =>
      cartSize &&
      css`
        &::after {
          content: "${cartSize}";
          position: absolute;
          right: -25%;
          top: -25%;

          display: flex;
          align-items: center;
          justify-content: center;

          width: 14px;
          height: 14px;

          background: ${({ theme }) => theme.color.orange};
          border-radius: 50%;
          font-size: 9.47368px;
          line-height: 14px;

          color: #ffffff;

          order: 1;
        }
      `}
  }

  svg {
    transition: stroke 0.1s linear;
  }
  &:hover svg {
    stroke: #c9c9c9;
  }
  &:hover {
    color: #c9c9c9;
  }
`;

export { ButtonsContainer, HeaderLink };
