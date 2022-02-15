import styled from "styled-components";

export const STable = styled.table`
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 46)};
  width: 100%;
`;

export const SThead = styled.thead`
  position: relative;
  z-index: 1;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;

  color: #232323;

  @media screen and (${({ theme }) => theme.media.MaxMobile}) {
    display: none;
  }

  th:first-child {
    width: 40%;
    padding: 10px 0 15px 34px;
    text-align: left;
    margin-bottom: 25px;
  }

  &::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: #e2f4ff;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.ratio.smallPhone(10, 55)};
  row-gap: 10px;

  flex-wrap: wrap;
  button {
    border-radius: 35px;

    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 6)};
    line-height: 1.5;
  }
`;
