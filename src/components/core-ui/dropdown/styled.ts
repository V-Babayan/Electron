import styled from "styled-components";

export const DropContainer = styled.div`
  position: relative;
  svg {
    transition: transform 0.1s linear;
    margin-left: 16px;
  }
  :hover {
    svg {
      transform: rotateZ(180deg);
    }
  }
`;
