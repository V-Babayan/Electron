import styled from "styled-components";
import smallCheckbird from "../../assets/icons/smallCheckbird.svg";

export const HeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;

    color: #003f62;
  }
  button {
    font-size: 15px;
    line-height: 1.5;

    color: #595959;
  }
`;

export const Category = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;

  input {
    appearance: none;
    width: 29px;
    height: 29px;

    background: #b3d4e5;
    border: 1px solid #b3d4e5;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background, border 0.2s linear;

    &:checked {
      background: #3f3f3f;
      border: 1px solid #a5a5a5;
      border-radius: 8px;

      ::after {
        content: url(${smallCheckbird});
      }
    }
  }
  div {
    flex: 1 1 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
