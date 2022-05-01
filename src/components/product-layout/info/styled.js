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

const CountWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.ratio(10, 30, "mobileS")};

  label {
    margin-right: 20px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(10, 20, "mobileS")};
  flex-wrap: wrap-reverse;

  font-size: ${({ theme }) => theme.ratio(16, 6, "mobileS")};

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

export {
  InfoContainer,
  ProductName,
  ProductPrice,
  ProductHaveIndicator,
  CountWrapper,
  ButtonsContainer,
  FavButton,
};
