import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Input = styled.input`
  display: none;

  &:checked ~ label {
    border-color: ${({ theme }) => theme.color.blue};
  }
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #1b5a7d;

  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #b5b5b5;
  border-radius: 20px;

  cursor: pointer;

  transition: background 0.25s linear;

  &:hover {
    background: #b5b5b5;
  }
`;
export { Container, Input, Label };
