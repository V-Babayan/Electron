import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const Form = styled.form`
  flex: 1 1 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 21px 25px;
  margin-bottom: 10px;
  border-radius: 20px;

  background: ${({ theme }) => theme.color.orange};
  @media screen and (${({ theme }) => theme.media(EDeviceNames.mobileL)}) {
    margin-bottom: none;
  }
  input {
    flex: 1 1 auto;

    background: transparent;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;

    &::placeholder {
      color: inherit;
    }
  }
`;

export { Form };
