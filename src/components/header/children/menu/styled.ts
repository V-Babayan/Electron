import styled from "styled-components";

const Burger = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 20;
  width: 40px;
  height: ${({ active }) => (active ? 0 : "5px")};
  margin-left: auto;

  background-color: #1b1d1c;

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
    transform: ${({ active }) =>
      active ? "rotate(-45deg)" : "translateY(-10px)"};
  }
  &::after {
    transform: ${({ active }) =>
      active ? "rotate(45deg)" : "translateY(10px)"};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.ratio(10, 58, "mobileS")};

  position: absolute;
  right: 0;
  top: 100%;
  z-index: 999;
  padding: ${({ theme }) => theme.ratio(10, 58, "mobileS")} 0;
  margin-left: auto;

  background: inherit;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex-direction: row;
    align-self: stretch;

    position: static;
    padding: 0;
  }

  @media screen and (${({ theme }) => theme.media("notebook")}) {
    margin-left: 0;
  }
`;
export { Burger, Nav };
