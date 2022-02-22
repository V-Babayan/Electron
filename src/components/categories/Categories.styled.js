import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SInput = styled.input`
  display: none;

  :checked ~ label {
    border-color: #003f62;
  }
`;

export const SLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #1b5a7d;

  display: inline-block;
  padding: 10px 30px;

  border: 1px solid #b5b5b5;
  border-radius: 20px;
`;
