import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.ul`
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;

  & > ul {
    flex: 0 0 100%;
    scroll-snap-align: center;
  }

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    margin-bottom: 0;
  }
  &::-webkit-scrollbar {
    display: none;
  }

  &:hover > li::before,
  &:focus-within > li::before {
    animation-name: none;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  ${({ list }) =>
    list
      ? css`
          margin-top: 20px;
        `
      : css`
          @media screen and (${({ theme }) => theme.media("tablet")}) {
            position: absolute;
            left: 15%;
            bottom: ${({ theme }) => theme.ratio(0, 55, "mobileS")};
            z-index: 1;
          }
        `}
`;
