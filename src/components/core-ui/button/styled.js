import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: ${({ theme, large }) =>
    theme.ratio(10, 8, "mobileS") +
    " " +
    (large ? theme.ratio(10, 52, "mobileS") : theme.ratio(10, 26, "mobileS"))};
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
          background: ${({ disabled, theme }) =>
            disabled ? theme.color.grey : theme.color.orange};
          color: #ffffff;
          border: 1px solid ${({ theme, color }) => theme.color[color]};

          &:hover {
            background: ${({ disabled, theme }) => (disabled ? theme.color.grey : "transparent")};
            color: ${({ theme, color }) => theme.color[color]};
          }
        `}
`;

export { Button };
