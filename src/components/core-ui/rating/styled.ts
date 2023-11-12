import styled from "styled-components";

export const StarrRating = styled.div<{ $defRating?: number }>`
  position: relative;

  display: inline-flex;

  &:hover::before {
    content: ${({ $defRating }) => '"' + $defRating + '"'};

    position: absolute;
    top: 0;
    left: 120%;
  }
`;

export const StarrButton = styled.button<{ $big?: boolean; $active?: boolean }>`
  font-size: ${({ $big }) => ($big ? "22px" : "15px")};
  line-height: 1;

  color: ${({ $active }) => ($active ? "#000000" : "#cccccc")};
`;
