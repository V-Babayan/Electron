import styled from "styled-components";

import { CheckMarkIcon } from "~/assets/icons";

const HeadingBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: ${({ theme }) => theme.color.blue};
`;

const ResetButton = styled.button`
  font-size: 15px;
  line-height: 1.5;

  color: #595959;
`;

const BrandList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  @media screen and (${({ theme }) => theme.media("mobileL")}) {
    display: block;
  }
`;

const Brand = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
`;

const BrandCheckbox = styled.input`
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
  position: relative;

  &:checked {
    content: url(${CheckMarkIcon});
    background: #3f3f3f;
    border: 1px solid #a5a5a5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
  }
`;
const BrandInfo = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export {
  Brand,
  BrandCheckbox,
  BrandInfo,
  BrandList,
  HeadingBlock,
  ResetButton,
  Title,
};
