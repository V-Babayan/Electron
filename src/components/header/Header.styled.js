import styled, { css } from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(0, 85)};

  padding: ${({ theme }) => theme.ratio.smallPhone(5, 17) + " " + theme.ratio.smallPhone(5, 59)};

  background: #003f62;

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    flex-wrap: wrap;
  }
`;

export const SForm = styled.form`
  flex: 1 1 380px;

  display: flex;
  justify-content: space-between;
  gap: 10px;

  padding-left: ${({ theme }) => theme.ratio.smallPhone(10, 15)};
  height: ${({ theme }) => theme.ratio.smallPhone(38, 18)};
  border-radius: 25px;

  background: #ffffff;
  overflow: hidden;

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    order: 1;
  }
  input {
    flex: 1 1 auto;
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 4)};
    color: #3a3a3a;
  }

  button {
    flex: 0 1 132px;

    background: #eda415;
    border-radius: 25px;

    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
  }
`;

export const ButtonsContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  gap: ${({ theme }) => theme.ratio.smallPhone(8, 20)};

  font-size: 14px;
  line-height: 1.5;

  margin-left: auto;
`;

export const HeaderLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(5, 7)};
  color: #ffffff;

  transition: color 0.1s linear;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
    ${({ cartSize }) =>
      cartSize &&
      css`
        &::after {
          content: "${cartSize}";
          display: flex;
          align-items: center;
          justify-content: center;

          width: 14px;
          height: 14px;

          background: #eda415;
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

export const HeaderBottom = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.ratio.smallPhone(18, 80)};

  align-items: center;

  padding: 0 ${({ theme }) => theme.ratio.smallPhone(5, 59)};

  background: #f4f4f4;

  position: relative;

  h5 {
    display: none;
    margin-left: auto;

    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    color: #003f62;
    @media screen and (${({ theme }) => theme.media.MinNotebook}) {
      display: block;
    }
  }
`;
