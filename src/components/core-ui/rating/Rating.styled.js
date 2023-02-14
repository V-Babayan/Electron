import styled from "styled-components";

export const StarrRating = styled.div`
  position: relative;

  display: inline-flex;

  &:hover::before {
    content: ${({ defRating }) => '"' + defRating + '"'};

    position: absolute;
    top: 0;
    left: 120%;
  }
`;

export const StarrButton = styled.button`
  font-size: ${({ big }) => (big ? "22px" : "15px")};
  line-height: 1;

  color: ${({ active }) => (active ? "#000000" : "#cccccc")};
`;
