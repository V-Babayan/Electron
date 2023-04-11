import styled from "styled-components";

const Container = styled.div`
  height: ${({ theme }) => theme.ratio(275, 500, "mobileS")};
  padding: 23px 13px;

  border: 1px solid #b6b6b6;
  border-radius: 20px;

  font-size: 16px;
  line-height: 1.6;

  @media screen and (${({ theme }) => theme.media("mobile")}) {
    height: auto;
  }
`;

const ImageBlock = styled.div`
  position: relative;
  margin-bottom: ${({ hover }) => (hover ? "25px" : "10px")};
  text-align: center;
  padding-top: 50%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  button {
    position: absolute;
    top: 14px;
    right: 25px;
    height: 28px;
    width: 28px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.1s linear;
    background: #b3d4e5;
    &:hover {
      background: ${({ theme }) => theme.color.lightblue};
    }

    svg {
      height: 16px;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h5 {
    font-weight: 500;
    color: ${({ theme }) => theme.color.blue};
  }
`;

const Price = styled.div`
  font-weight: 600;
  color: #4a4a4a;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  &:first-child {
    white-space: nowrap;
  }

  padding: ${({ theme }) => `${theme.ratio(7, 8, "mobileS")} ${theme.ratio(5, 17, "mobileS")}`};
  border-radius: ${({ theme }) => theme.ratio(15, 5, "mobileS")};

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  background: ${({ theme }) => theme.color.lightblue};
  color: #272727;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  &:hover {
    background: #51a3d0;
  }

  div {
    height: 30px;
    width: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ theme }) => theme.color.orange};
    border-radius: 50%;
    svg {
      height: 17px;
    }
  }
`;

export { Container, ImageBlock, InfoContainer, Price, ButtonsContainer, Button };
