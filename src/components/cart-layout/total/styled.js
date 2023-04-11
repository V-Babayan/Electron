import styled from "styled-components";

const CartTotal = styled.section`
  @media screen and (${({ theme }) => theme.media("notebook")}) {
    align-self: flex-start;
  }
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

const Content = styled.div`
  padding: ${({ theme }) => `
      ${theme.ratio(10, 10, "mobileS")}
      ${theme.ratio(10, 34, "mobileS")}
      ${theme.ratio(10, 14, "mobileS")}
    `};

  & > button {
    width: 100%;
    border-radius: 32px;
    padding: 10px;
  }
`;
const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #232323;
  margin-bottom: ${({ theme }) => theme.ratio(10, 42, "mobileS")};

  ::after {
    content: "";

    position: absolute;

    width: 100%;
    border-bottom: 1px solid #afafaf;

    /* top: calc(100% + 30px); */
    bottom: ${({ theme }) => theme.ratio(-5, -25, "mobileS")};
    left: 0;
  }

  span {
    font-size: 22px;
  }
`;

const Form = styled.form`
  padding: 14px 23px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  margin-bottom: ${({ theme }) => theme.ratio(10, 50, "mobileS")};
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

    color: ${({ theme }) => theme.color.blue};
  }

  &::after {
    content: "";

    position: absolute;

    width: 100%;
    border-bottom: 1px solid #afafaf;

    bottom: ${({ theme }) => theme.ratio(-5, -25, "mobileS")};
    left: 0;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.ratio(8, 20, "mobileS")};

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

const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.ratio(15, 15, "mobileS")};

  line-height: 1.5;
  color: #232323;
  p {
    font-size: 16px;
  }
  span {
    font-size: 18px;
  }
`;
export { CartTotal, Content, Subtotal, Form, SelectWrapper, TotalPrice };
