import styled from "styled-components";

export const Row = styled.tr`
  text-align: center;
  td {
    padding: 25px 0;

    border-bottom: 1px solid #c3c3c3;
  }

  button:hover {
    filter: contrast(50%);
  }
  @media screen and (${({ theme }) => theme.media.MaxMobile}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    border-bottom: 1px solid #c3c3c3;

    td {
      :first-child {
        flex: 1 1 66%;
      }
      flex: 1 1 33%;
      border-bottom: none;
    }
  }
`;

export const SFigure = styled.figure`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(5, 15)};

  div {
    flex: 0 0 50%;
    position: relative;
    padding-bottom: 40%;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
  figcaption {
    font-weight: 600;
    font-size: ${({ theme }) => theme.ratio.smallPhone(16, 4)};
    line-height: 1.5;

    color: #003f62;
  }

  @media screen and (${({ theme }) => theme.media.MaxMobile}) {
  }
`;
