import styled from "styled-components";

export const DropItem = styled.li`
  background: ${({ theme }) => theme.color.orange};
  border-top: 1px solid #ffffff;

  &:hover {
    background: #d8971a;
  }
`;
