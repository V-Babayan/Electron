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

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: ${({ theme }) => theme.ratio.smallPhone(10, 30)};
`;
export const Container = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;

  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    margin-bottom: 15px;
  }

  &:hover > li::before,
  &:focus-within > li::before {
    animation-name: none;
  }
`;

export const SPage = styled.li`
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

  @media screen and (${({ theme }) => theme.media.MinTablet}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 ${({ theme }) => theme.ratio.tablet(20, 120) + " 0 " + theme.ratio.tablet(10, 100)};
  }

  &:last-child::before {
    @media (hover: hover) {
      animation-name: ${tostart}, ${snap};
    }
  }
`;

export const PageLeft = styled.section`
  @media screen and (${({ theme }) => theme.media.MinTablet}) {
    flex: 0 0 310px;
    margin-bottom: ${({ theme }) => theme.ratio.tablet(20, 90)};
  }

  h5 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.ratio.smallPhone(20, 24)};
    line-height: 1.5;

    color: #1b5a7d;
    margin-bottom: 20px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    flex: 0 0 auto;
  }

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    justify-content: center;
  }
`;

export const PageRight = styled.div`
  flex: 0 0 40%;
  position: relative;
`;
export const ImageBlock = styled.div`
  position: relative;
  padding-bottom: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &::after {
    content: "Only ${({ price }) => price}$";

    position: absolute;
    right: 0;
    bottom: 10%;
    width: ${({ theme }) => theme.ratio.smallPhone(80, 40)};
    height: ${({ theme }) => theme.ratio.smallPhone(80, 40)};
    padding: ${({ theme }) => theme.ratio.smallPhone(15, 10)};

    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 4)};
    line-height: 1.6;
    color: #ffffff;
    background: #eda415;
    text-align: center;

    border-radius: 50%;

    @media screen and (${({ theme }) => theme.media.MinTablet}) {
      right: ${({ theme }) => theme.ratio.tablet(-10, -22)};
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  @media screen and (${({ theme }) => theme.media.MinTablet}) {
    position: absolute;
    left: 15%;
    bottom: ${({ theme }) => theme.ratio.smallPhone(0, 55)};
    z-index: 1;
  }
`;

export const SControl = styled.button`
  height: 16px;
  width: 16px;

  border-radius: 50%;

  transition: background 0.1s linear;

  ${({ active }) => (active ? `background: #eda415` : `border: 1px solid #adadad`)}
`;
