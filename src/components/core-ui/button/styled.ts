import styled, { css } from "styled-components";

import { EDeviceNames } from "~/helpers";

const Button = styled.button<{
  $large?: boolean;
  $outlined?: boolean;
  $color?: string;
  $disabled?: boolean;
}>`
  display: inline-block;
  padding: ${({ theme, $large }) =>
    theme.ratio(10, 8, EDeviceNames.mobileS) +
    " " +
    ($large
      ? theme.ratio(10, 52, EDeviceNames.mobileS)
      : theme.ratio(10, 26, EDeviceNames.mobileS))};
  border-radius: ${({ $large }) => ($large ? "32px" : "20px")};

  font-weight: 600;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;

  ${({ $outlined, $disabled, $color, theme }) =>
    $outlined
      ? css`
          background: transparent;
          color: ${theme.color[$color]};
          transition: ${$color}, background 0.2s ease;
          border: 1px solid ${theme.color[$color]};
          &:hover {
            color: #ffffff;
            background: ${theme.color[$color]};
          }
        `
      : css`
          transition: ${$color}, background 0.2s linear;
          background: ${({ theme }) =>
            theme.color[$disabled ? "grey" : "orange"]};
          color: #ffffff;
          border: 1px solid ${theme.color[$color]};

          &:hover {
            background: ${$disabled ? theme.color.grey : "transparent"};
            color: ${theme.color[$color]};
          }
        `}
`;

export { Button };
