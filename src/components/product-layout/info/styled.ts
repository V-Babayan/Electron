import styled from "styled-components";

const InfoContainer = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

const ProductName = styled.h5`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.blue};
`;

const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;

  color: #4a4a4a;
`;

const ProductHaveIndicator = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.5;

  display: flex;
  gap: 20px;
  align-items: center;

  margin: 16px 0;

  span {
    color: #30bd57;
  }
`;

export { InfoContainer, ProductName, ProductPrice, ProductHaveIndicator };
