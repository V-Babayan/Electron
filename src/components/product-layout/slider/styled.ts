import styled from "styled-components";

const ImageBlock = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 80%;
  margin-bottom: 25px;

  border: 1px solid #acacac;
  border-radius: 20px;
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

export { ImageBlock, Image };
