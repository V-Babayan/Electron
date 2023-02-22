import styled from "styled-components";

export const Container = styled.div`
  @media screen and (${({ theme }) => theme.media.MinMobile}) {
    display: flex;
    align-items: flex-start;

    gap: 20px;
    & > aside {
      flex: 0 2 315px;
    }
    & > div {
      width: 100%;

      & > div {
        flex: 1 1 auto;

        grid-template-columns: 1fr 1fr;

        @media screen and (${({ theme }) => theme.media.MinNotebook}) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
`;

export const Filter = styled.form`
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(12, 40)};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 15px;

  & > input {
    flex: 1 1 auto;
    padding: 10px 20px;

    border: 1px solid #b6b6b6;
    border-radius: 20px;

    font-size: 20px;
  }
`;
