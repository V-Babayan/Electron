import styled from "styled-components";

export const Control = styled.button<{ $active: boolean }>`
  height: 16px;
  width: 16px;

  border-radius: 50%;

  transition: background 0.1s linear;

  ${({ $active, theme }) =>
    $active ? `background: ${theme.color.orange}` : `border: 1px solid #adadad`}
`;
