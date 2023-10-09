import styled, { keyframes } from "styled-components";

import { EDeviceNames } from "~/helpers";

const toNext = keyframes`
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

const toStart = keyframes`
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
      animation-name: ${toNext}, ${snap};

      animation-timing-function: ease;
      animation-duration: 10s;
      animation-iteration-count: infinite;
    }
  }
  :last-child::before {
    @media (hover: hover) {
      animation-name: ${toStart}, ${snap};
    }
  }

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) =>
      `0 ${theme.ratio(20, 120, EDeviceNames.tablet)} 0 ${theme.ratio(
        10,
        100,
        EDeviceNames.tablet
      )}`};
  }
`;

const PageLeft = styled.section`
  text-align: center;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    text-align: left;

    flex: 0 0 ${({ theme }) => theme.ratio(270, 80, EDeviceNames.tablet)};

    margin-top: ${({ theme }) => theme.ratio(28, 38, EDeviceNames.tablet)};
    height: 208px;

    display: flex;
    flex-direction: column;
  }
`;

const ProductName = styled.h5`
  font-weight: 700;
  font-size: ${({ theme }) => theme.ratio(20, 24, EDeviceNames.mobileS)};
  line-height: 1.5;

  color: ${({ theme }) => theme.color.blue};
  margin: auto 0 ${({ theme }) => theme.ratio(10, 10, EDeviceNames.mobileS)};
`;

const ButtonsContainer = styled.div`
  button:first-child {
    margin-right: 20px;
  }
`;

const PageRight = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    flex: 0 0 40%;
  }
`;

const ImageBlock = styled.div<{ $price: number }>`
  position: relative;
  width: ${({ theme }) => theme.ratio(300, 450, EDeviceNames.mobileS)};

  /* For image correct size and don't have scroll.  */
  display: flex;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    width: auto;
    height: ${({ theme }) => theme.ratio(285, 75, EDeviceNames.tablet)};
  }

  &::after {
    content: "Only ${({ $price }) => $price}$";

    position: absolute;
    right: ${({ theme }) => theme.ratio(-10, -22, EDeviceNames.mobileS)};
    bottom: 10%;

    width: ${({ theme }) => theme.ratio(80, 40, EDeviceNames.mobileS)};
    height: ${({ theme }) => theme.ratio(80, 40, EDeviceNames.mobileS)};
    padding: ${({ theme }) => theme.ratio(15, 10, EDeviceNames.mobileS)};

    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio(16, 4, EDeviceNames.mobileS)};
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

  @media screen and (${({ theme }) => theme.media(EDeviceNames.tablet)}) {
    width: auto;
    height: 100%;
  }
`;

export {
  ButtonsContainer,
  Image,
  ImageBlock,
  Page,
  PageLeft,
  PageRight,
  ProductName,
};
