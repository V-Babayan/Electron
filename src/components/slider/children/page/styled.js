import styled, { keyframes } from "styled-components";

const tonext = keyframes`
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
`;

const tostart = keyframes`
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
`;

const snap = keyframes`
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
`;

const Page = styled.li`
  position: relative;

  flex: 0 0 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  ::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    scroll-snap-align: center;

    @media (hover: hover) {
      /* animation-name: ${tonext}, ${snap}; */

      animation-timing-function: ease;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }
  :last-child::before {
    @media (hover: hover) {
      /* animation-name: ${tostart}, ${snap}; */
    }
  }

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) =>
      `0 ${theme.ratio(20, 120, "tablet")} 0 ${theme.ratio(10, 100, "tablet")}`};
  }
`;

const PageLeft = styled.section`
  text-align: center;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    text-align: left;

    flex: 0 0 ${({ theme }) => theme.ratio(270, 80, "tablet")};

    margin-top: ${({ theme }) => theme.ratio(28, 38, "tablet")};
    height: 208px;

    display: flex;
    flex-direction: column;
  }
`;

const ProductName = styled.h5`
  font-weight: 700;
  font-size: ${({ theme }) => theme.ratio(20, 24, "mobileS")};
  line-height: 1.5;

  color: #1b5a7d;
  margin: auto 0 ${({ theme }) => theme.ratio(10, 10, "mobileS")};
`;

const ButtonsContainer = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;

const PageRight = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex: 0 0 40%;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  width: ${({ theme }) => theme.ratio(300, 450, "mobileS")};

  /* For image correct size and don't have scroll.  */
  display: flex;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    width: auto;
    height: ${({ theme }) => theme.ratio(285, 75, "tablet")};
  }

  ::after {
    content: "Only ${({ price }) => price}$";

    position: absolute;
    right: ${({ theme }) => theme.ratio(-10, -22, "mobileS")};
    bottom: 10%;

    width: ${({ theme }) => theme.ratio(80, 40, "mobileS")};
    height: ${({ theme }) => theme.ratio(80, 40, "mobileS")};
    padding: ${({ theme }) => theme.ratio(15, 10, "mobileS")};

    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio(16, 4, "mobileS")};
    line-height: 1.6;
    color: #ffffff;
    background: ${({ theme }) => theme.color.orange};
    text-align: center;

    border-radius: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    width: auto;
    height: 100%;
  }
`;

export { Page, PageLeft, ProductName, ButtonsContainer, PageRight, ImageBlock, Image };
