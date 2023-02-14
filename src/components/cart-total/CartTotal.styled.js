import styled from "styled-components";

export const SCartTotal = styled.section`
  align-self: flex-start;
  width: 100%;
  text-align: center;
  border: 1px solid #c3c3c3;

  h5 {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.5;

    color: #232323;
    background: #e2f4ff;
    padding: 12px;
  }
`;
export const Content = styled.div`
  padding: 20px 44px 24px;
  & > button {
    width: 100%;
    border-radius: 32px;
    padding: 10px;
  }
`;
export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;

  color: #232323;
  padding-bottom: 20px;
  border-bottom: 1px solid #afafaf;

  margin-bottom: 32px;
  span {
    font-size: 22px;
  }
`;
export const Form = styled.form`
  padding: 14px 23px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  margin-bottom: 60px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    background: transparent;

    font-size: 16px;
    line-height: 1.5;

    color: #232323;
  }

  button {
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;

    color: #003f62;
  }

  &::after {
    content: "";

    position: absolute;

    width: 100%;
    border-bottom: 1px solid #afafaf;

    top: calc(100% + 30px);
    left: 0;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: 28px;

  select {
    width: 100%;
    border: 1px solid #afafaf;
    border-radius: 20px;
    padding: 14px 23px;
    appearance: none;

    background: transparent;
  }

  svg {
    stroke: #000000;
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Select = styled.select``;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;

  line-height: 1.5;
  color: #232323;
  p {
    font-size: 16px;
  }
  span {
    font-size: 18px;
  }
`;
