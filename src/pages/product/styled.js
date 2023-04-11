import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.ratio(10, 40, "mobileS")};
  margin-bottom: 20px;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;
`;

export const ProductName = styled.h5`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.blue};
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.5;

  color: #4a4a4a;
`;

export const ProductHaveIndicator = styled.div`
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

export const CountWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.ratio(10, 30, "mobileS")};

  label {
    margin-right: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(10, 20, "mobileS")};
  flex-wrap: wrap-reverse;

  font-size: ${({ theme }) => theme.ratio(16, 6, "mobileS")};

  button {
    flex: 0 0 auto;
  }
`;

export const FavButton = styled.button`
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

export const DescriptionWrapper = styled.article`
  padding: ${({ theme }) => `${theme.ratio(10, 32, "mobileS")} ${theme.ratio(10, 40, "mobileS")}`};
  border: 1px solid #b8b8b8;
  border-radius: 20px;

  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DescriptionTitle = styled.h5`
  font-weight: 600;
  font-size: 22px;

  color: ${({ theme }) => theme.color.blue};
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.ratio(16, 4, "mobileS")};

  color: #4f4f4f;
`;
