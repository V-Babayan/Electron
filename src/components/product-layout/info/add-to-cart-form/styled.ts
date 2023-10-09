import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const CountWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.ratio(10, 30, EDeviceNames.mobileS)};

  label {
    margin-right: 20px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(10, 20, EDeviceNames.mobileS)};
  flex-wrap: wrap-reverse;

  font-size: ${({ theme }) => theme.ratio(16, 6, EDeviceNames.mobileS)};

  button {
    flex: 0 0 auto;
  }
`;

const FavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 74px;
  height: 73px;
  border-radius: 50%;

  background: #eeeeee;

  svg {
    height: 27px;
  }
  &:hover {
    background: #cccccc;
  }
`;

export { ButtonsContainer, CountWrapper, FavButton };
