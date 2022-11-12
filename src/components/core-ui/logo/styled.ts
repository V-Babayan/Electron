import styled from "styled-components";

const Logo = styled.div<{ blue?: boolean }>`
  display: flex;
  align-self: center;
  gap: 5px;

  color: ${({ blue }) => (blue ? "#1b5a7d" : "#ffffff")};
  font-size: 1.5em;
  line-height: 2;
  font-weight: 700;

  &:hover {
    color: ${({ blue }) => (blue ? "#024367" : "#c9c9c9")};
  }
`;

export { Logo };
