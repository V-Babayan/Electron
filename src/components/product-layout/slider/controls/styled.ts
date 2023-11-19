import styled from "styled-components";

const Controls = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Control = styled.button`
  border: 1px solid #c0c0c0;
  border-radius: 20px;

  transition: filter 0.2s linear;
  position: relative;
  padding-bottom: 100%;

  &:hover {
    border-color: #e77600;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;

export { Controls, Control, Image };
