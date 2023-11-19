import styled from "styled-components";

const Table = styled.table`
  margin-bottom: ${({ theme }) => theme.ratio(10, 46, "mobileS")};
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.ratio(10, 55, "mobileS")};
  row-gap: 10px;

  flex-wrap: wrap;
  button {
    border-radius: 35px;

    font-size: ${({ theme }) => theme.ratio(16, 6, "mobileS")};
  }
`;

export { Table, ButtonsContainer };
