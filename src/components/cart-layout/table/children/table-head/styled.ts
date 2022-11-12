import styled from "styled-components";

const Thead = styled.thead`
  position: relative;
  z-index: 1;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;

  color: #232323;

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

export { Thead };
