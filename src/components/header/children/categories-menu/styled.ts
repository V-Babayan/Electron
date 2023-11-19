import styled from "styled-components";

const CategoriesButton = styled.div`
  padding: ${({ theme }) => theme.ratio(10, 14, "mobileS")};
  padding-left: 14px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: #ffffff;
  background: ${({ theme }) => theme.color.orange};
  display: inline-block;
  & > svg {
    stroke: #ffffff;
  }
`;

const CategoriesList = styled.ul`
  position: absolute;
  z-index: 999;
  width: 100%;
  color: #ffffff;
  text-align: center;
`;

const DropItem = styled.li`
  background: ${({ theme }) => theme.color.orange};
  border-top: 1px solid #ffffff;
  a {
    display: block;
    padding: 10px 0;
  }
  transition: background 0.1s linear;
  :hover {
    background: #d8971a;
  }
`;

export { CategoriesButton, CategoriesList, DropItem };
