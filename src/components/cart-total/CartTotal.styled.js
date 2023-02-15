import styled from "styled-components";

export const SCartTotal = styled.section`
  @media screen and (${({ theme }) => theme.media.MinNotebook}) {
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

export const Content = styled.div`
  padding: ${({ theme }) => `
      ${theme.ratio.smallPhone(10, 10)}
      ${theme.ratio.smallPhone(10, 34)}
      ${theme.ratio.smallPhone(10, 14)}
    `};

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
  position: relative;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  color: #232323;
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 42)};

  ::after {
    content: "";

    position: absolute;

    width: 100%;
    border-bottom: 1px solid #afafaf;

    /* top: calc(100% + 30px); */
    bottom: ${({ theme }) => theme.ratio.smallPhone(-5, -25)};
    left: 0;
  }

  span {
    font-size: 22px;
  }
`;

export const Form = styled.form`
  padding: 14px 23px;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 50)};
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

    bottom: ${({ theme }) => theme.ratio.smallPhone(-5, -25)};
    left: 0;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(8, 20)};

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

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(15, 15)};

  line-height: 1.5;
  color: #232323;
  p {
    font-size: 16px;
  }
  span {
    font-size: 18px;
  }
`;
