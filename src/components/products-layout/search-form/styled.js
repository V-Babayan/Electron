import styled from "styled-components";

const SearchForm = styled.form`
  margin-bottom: ${({ theme }) => theme.ratio(12, 40, "mobileS")};

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  column-gap: 40px;
  row-gap: 15px;
`;

const SearchInput = styled.input`
  flex: 1 1 auto;
  padding: 10px 20px;

  border: 1px solid #b6b6b6;
  border-radius: 20px;

  font-size: 20px;
`;

export { SearchForm, SearchInput };
