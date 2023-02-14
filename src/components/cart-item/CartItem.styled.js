import styled from "styled-components";

export const Row = styled.tr`
  text-align: center;
  td {
    padding: 25px 0;

    border-bottom: 1px solid #c3c3c3;
  }
`;

export const SFigure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    flex: 0 0 50%;
    position: relative;
    padding-bottom: 40%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
  figcaption {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;

    color: #003f62;
  }
`;

export const SButton = styled.button`
  &:hover {
    filter: contrast(50%);
  }
`;
