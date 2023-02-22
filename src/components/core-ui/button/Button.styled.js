import styled, { css } from "styled-components";

export const SButton = styled.button`
  display: inline-block;
  padding: ${({ theme, large }) =>
    theme.ratio.smallPhone(10, 8) +
    " " +
    (large ? theme.ratio.smallPhone(10, 52) : theme.ratio.smallPhone(10, 26))};
  border-radius: ${({ large }) => (large ? "32px" : "20px")};

  font-weight: 600;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;

  ${({ outlined }) =>
    outlined
      ? css`
          background: transparent;
          color: ${({ theme, color }) => theme.color[color]};
          transition: color, background 0.2s ease;
          border: 1px solid ${({ theme, color }) => theme.color[color]};
          &:hover {
            color: #ffffff;
            background: ${({ theme, color }) => theme.color[color]};
          }
        `
      : css`
          transition: color, background 0.2s linear;
          background: ${({ disabled, theme }) => (disabled ? theme.color.grey : "#eda415")};
          color: #ffffff;
          border: 1px solid #eda415;

          &:hover {
            background: ${({ disabled, theme }) => (disabled ? theme.color.grey : "transparent")};
            color: #eda415;
          }
        `}
`;
