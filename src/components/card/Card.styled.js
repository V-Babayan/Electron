import styled from "styled-components";

export const Container = styled.div`
  padding: 23px 13px;

  border: 1px solid #b6b6b6;
  border-radius: 20px;

  font-size: 16px;
  line-height: 1.6;

  @media screen and (${({ theme }) => theme.media.MaxSmallMobile}) {
    height: ${({ theme }) => theme.ratio.smallPhone(275, 500)};
  }
`;

export const ImageBlock = styled.div`
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
      background: #87bcd9;
    }

    svg {
      height: 16px;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  h5 {
    font-weight: 500;
    color: #003f62;
  }
`;

export const Price = styled.div`
  font-weight: 600;
  color: #4a4a4a;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  font-size: 16px;
`;
export const StyledButton = styled.button`
  &:first-child {
    white-space: nowrap;
  }

  padding: ${({ theme }) => `${theme.ratio.smallPhone(7, 8)} ${theme.ratio.smallPhone(5, 17)}`};
  border-radius: ${({ theme }) => theme.ratio.smallPhone(15, 5)};

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  background: #87bcd9;
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

    background: #eda415;
    border-radius: 50%;
    svg {
      height: 17px;
    }
  }
`;
