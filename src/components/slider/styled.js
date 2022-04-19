import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Container = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;

  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    margin-bottom: 0;
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

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    position: absolute;
    left: 15%;
    bottom: ${({ theme }) => theme.ratio(0, 55, "mobileS")};
    z-index: 1;
  }
`;
