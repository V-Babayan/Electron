import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 40)};
  margin-bottom: 20px;

  @media screen and (${({ theme }) => theme.media.MaxTablet}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoContainer = styled.div`
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #bdbdbd;

  & > h5 {
    font-weight: 500;
    font-size: 30px;
    line-height: 1.5;
    color: #003f62;
  }

  & > p {
    font-weight: 600;
    font-size: 30px;
    line-height: 1.5;

    color: #4a4a4a;
  }
`;

export const Indicator = styled.div`
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
  margin-bottom: ${({ theme }) => theme.ratio.smallPhone(10, 30)};

  label {
    margin-right: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 20)};

  font-size: ${({ theme }) => theme.ratio.smallPhone(16, 6)};

  @media screen and (${({ theme }) => theme.media.MaxNotebook}) {
    flex-wrap: wrap-reverse;
  }
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
  padding: ${({ theme }) => `${theme.ratio.smallPhone(10, 32)} ${theme.ratio.smallPhone(10, 40)}`};
  border: 1px solid #b8b8b8;
  border-radius: 20px;

  line-height: 1.5;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h5 {
    font-weight: 600;
    font-size: 22px;

    color: #003f62;
  }
  div {
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 4)};

    color: #4f4f4f;
  }
`;
