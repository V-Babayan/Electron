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

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    scroll-snap-align: center;

    @media (hover: hover) {
      animation-name: ${tonext}, ${snap};

      animation-timing-function: ease;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0
      ${({ theme }) => theme.ratio(20, 120, "tablet") + " 0 " + theme.ratio(10, 100, "tablet")};
  }

  &:last-child::before {
    @media (hover: hover) {
      animation-name: ${tostart}, ${snap};
    }
  }
`;

const PageLeft = styled.section`
  text-align: center;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex: 0 0 350px;

    text-align: left;
  }
`;

const ProductName = styled.h5`
  font-weight: 700;
  font-size: ${({ theme }) => theme.ratio(20, 24, "mobileS")};
  line-height: 1.5;

  color: #1b5a7d;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;

const PageRight = styled.div`
  flex: 0 0 40%;
  align-self: stretch;
  position: relative;
`;

const ImageBlock = styled.div`
  position: relative;

  height: 360px;
  width: 100%;

  &::after {
    content: "Only ${({ price }) => price}$";

    position: absolute;
    right: 0;
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

    @media screen and (${({ theme }) => theme.media("tablet")}) {
      right: ${({ theme }) => theme.ratio(-10, -22, "tablet")};
    }
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export { Page, PageLeft, ProductName, ButtonsContainer, PageRight, ImageBlock, Image };
