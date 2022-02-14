import styled from "styled-components";

export const SCountBlock = styled.div`
  font-size: 18px;
  line-height: 1.5;

  background: #eeeeee;
  border: 1px solid #bdbdbd;

  display: inline-grid;
  grid-template-columns: 35px 63px 35px;

  span {
    justify-self: center;
  }
  button {
    background: #eeeeee;
    border: 1px solid #bdbdbd;

    &:hover {
      background: #cccccc;
    }
  }
`;
