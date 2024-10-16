import styled from "styled-components";

const ImageBlock = styled.div`
  position: relative;
  text-align: center;
  height: 63%;

  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  object-fit: contain;

  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.25);
  }
`;

const FavButton = styled.button`
  position: absolute;
  top: 14px;
  right: 25px;
  height: 28px;
  width: 28px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.1s linear;
  background: #b3d4e5;

  &:hover {
    background: ${({ theme }) => theme.color.lightblue};
  }

  svg {
    height: 16px;
  }
`;

export { FavButton, Image, ImageBlock };
