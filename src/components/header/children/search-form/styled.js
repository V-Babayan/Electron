import styled from "styled-components";

export const Form = styled.form`
  flex: 1 1 380px;

  display: flex;
  order: 1;
  justify-content: space-between;
  gap: 10px;

  padding-left: ${({ theme }) => theme.ratio(10, 15, "mobileS")};
  height: ${({ theme }) => theme.ratio(38, 18, "mobileS")};
  border-radius: 25px;

  background: #ffffff;
  overflow: hidden;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    order: 0;
  }
`;

export const SearchInput = styled.input`
  flex: 1 1 auto;
  font-size: ${({ theme }) => theme.ratio(16, 4, "mobileS")};
  color: #3a3a3a;
`;

export const SearchButton = styled.button`
  flex: 0 1 132px;

  background: ${({ theme }) => theme.color.orange};
  border-radius: 25px 0 0 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  color: #ffffff;
`;
