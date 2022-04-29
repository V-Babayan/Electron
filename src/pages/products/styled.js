import styled from "styled-components";

export const Container = styled.div`
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    display: flex;
    align-items: flex-start;

    gap: 20px;
  }
`;

export const MainContent = styled.div`
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    width: 100%;

    & > ul {
      flex: 1 1 auto;

      grid-template-columns: 1fr 1fr;
    }
  }
  & > ul {
    @media screen and (${({ theme }) => theme.media("notebook")}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export const Sidebar = styled.aside`
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    flex: 0 2 315px;
  }
`;

export const Filter = styled.form`
  margin-bottom: ${({ theme }) => theme.ratio(12, 40, "mobileS")};

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
