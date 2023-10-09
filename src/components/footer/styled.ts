import styled from "styled-components";

import { EDeviceNames } from "~/helpers";

const Footer = styled.footer`
  padding: ${({ theme }) =>
    theme.ratio(12, 30, EDeviceNames.mobileS) +
    " " +
    theme.ratio(5, 59, EDeviceNames.mobileS)};

  background: #e2f4ff;
`;

const FooterTop = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 38px 96px;
  padding: ${({ theme }) =>
    theme.ratio(13, 25, EDeviceNames.mobileS) +
    " " +
    theme.ratio(15, 80, EDeviceNames.mobileS)};
  margin-bottom: 40px;

  column-gap: ${({ theme }) => theme.ratio(10, 125, EDeviceNames.tablet)};
  row-gap: 10px;

  background: #ffffff;
  border-radius: 20px;
  h5 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.ratio(20, 8, EDeviceNames.mobileS)};
    line-height: 1.5;

    color: #1b5a7d;
  }

  & > div {
    flex: 1 1 auto;

    @media screen and (${({ theme }) => theme.media(EDeviceNames.mobileL)}) {
      display: flex;
      gap: ${({ theme }) => theme.ratio(8, 80, EDeviceNames.mobile)};
    }
  }
`;

const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio(5, 15, EDeviceNames.mobileS)};
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (${({ theme }) => theme.media(EDeviceNames.mobile)}) {
    flex-direction: row;
  }
`;

const InfoContainer = styled.div`
  @media screen and (${({ theme }) => theme.media(EDeviceNames.mobile)}) {
    flex: 0 1 250px;
  }

  address {
    margin-top: ${({ theme }) => theme.ratio(15, 25, EDeviceNames.mobileS)};
    margin-bottom: ${({ theme }) => theme.ratio(20, 40, EDeviceNames.mobileS)};
  }
`;

const Content = styled.div`
  margin-right: ${({ theme }) => theme.ratio(0, 80, EDeviceNames.mobileS)};

  display: flex;
  gap: ${({ theme }) => theme.ratio(10, 218, EDeviceNames.mobileS)};
`;

const LinksContainer = styled.section`
  font-size: 19px;
  line-height: 1.5;
  color: #1b5a7d;

  h5 {
    font-weight: 600;
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    li {
      list-style-type: disc;
    }
    li::marker {
      height: 10px;
      color: #d9d9d9;
    }
  }
`;
export {
  ContactBlock,
  Content,
  Footer,
  FooterBottom,
  FooterTop,
  InfoContainer,
  LinksContainer,
};
