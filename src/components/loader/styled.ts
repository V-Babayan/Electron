import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    transform: rotateZ(0) scale(1);
  }

  50% {
    transform: rotateZ(90deg) scale(1.3);
  }

  to {
    transform: rotateZ(180deg) scale(1);
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";

    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 10px dotted #39739d;

    animation: ${loading} 2s linear infinite;
  }
`;
