import styled from "styled-components";

export const Burger = styled.div`
  position: relative;
  z-index: 20;
  width: 40px;
  height: ${({ active }) => (active ? 0 : "5px")};
  margin-left: auto;

  background-color: #1b1d1c;
  @media screen and (${({ theme }) => theme.media.MinTablet}) {
    display: none;
  }

  &::after,
  &::before {
    content: "";

    display: inline-block;
    position: absolute;
    width: inherit;
    height: 5px;
    top: 0;
    left: 0;

    background-color: inherit;
    transition: transform 0.2s linear;
  }
  &::before {
    transform: ${({ active }) => (active ? "rotate(-45deg)" : "translateY(-10px)")};
  }
  &::after {
    transform: ${({ active }) => (active ? "rotate(45deg)" : "translateY(10px)")};
  }
`;

export const SNav = styled.nav`
  align-self: stretch;
  display: flex;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 58)};
  align-items: center;

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    background: inherit;
    flex-direction: column;
    position: absolute;
    padding: ${({ theme }) => theme.ratio.smallPhone(10, 58)} 0;
    right: 0;
    top: 100%;
    z-index: 999;
  }

  @media screen and (${({ theme }) => theme.media.MaxNotebook}) {
    margin-left: auto;
  }
`;
