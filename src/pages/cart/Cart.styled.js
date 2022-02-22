import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;

  @media screen and (${({ theme }) => theme.media.MinNotebook}) {
    flex-direction: row;

    & > div {
      flex: 1 1 70%;
    }
    & > section {
      flex: 1 1 auto;
    }
  }
`;

export const EmptyBlock = styled.div`
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: ${({ theme }) => theme.ratio.smallPhone(16, 16)};

  a {
    color: #008cff;
    font-weight: 700;

    :hover {
      color: #008cff85;
    }
  }
`;
