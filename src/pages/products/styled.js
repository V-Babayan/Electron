import styled from "styled-components";

const Container = styled.div`
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    display: flex;
    align-items: flex-start;

    gap: 20px;
  }
`;

const MainContent = styled.div`
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
const Sidebar = styled.aside`
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    flex: 0 2 315px;
  }
`;

export { Container, MainContent, Sidebar };
