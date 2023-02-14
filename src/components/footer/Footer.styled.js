import styled from "styled-components";

export const SFooter = styled.footer`
  padding: ${({ theme }) => theme.ratio.smallPhone(12, 30) + " " + theme.ratio.smallPhone(5, 59)};

  background: #e2f4ff;
`;

export const FooterTop = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  padding: 38px 96px;
  padding: ${({ theme }) => theme.ratio.smallPhone(13, 25) + " " + theme.ratio.smallPhone(15, 80)};
  margin-bottom: 40px;

  column-gap: ${({ theme }) => theme.ratio.tablet(10, 125)};
  row-gap: 10px;

  background: #ffffff;
  border-radius: 20px;
  h5 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.ratio.smallPhone(20, 8)};
    line-height: 1.5;

    color: #1b5a7d;
  }

  & > div {
    flex: 1 1 auto;

    @media screen and (${({ theme }) => theme.media.MinMobile}) {
      display: flex;
      gap: ${({ theme }) => theme.ratio.phone(8, 80)};
    }
  }
`;

export const SForm = styled.form`
  flex: 1 1 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  padding: 21px 25px;
  border-radius: 20px;

  background: #eda415;
  @media screen and (${({ theme }) => theme.media.MaxMobile}) {
    margin-bottom: 10px;
  }
  input {
    flex: 1 1 auto;

    background: transparent;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;

    &::placeholder {
      color: inherit;
    }
  }
`;

export const ContactBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.ratio.smallPhone(5, 15)};
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media screen and (${({ theme }) => theme.media.MinSmallMobile}) {
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  @media screen and (${({ theme }) => theme.media.MinSmallMobile}) {
    flex: 0 1 250px;
  }

  address {
    margin-top: ${({ theme }) => theme.ratio.smallPhone(15, 25)};
    margin-bottom: ${({ theme }) => theme.ratio.smallPhone(20, 40)};
  }
`;

export const Content = styled.div`
  margin-right: ${({ theme }) => theme.ratio.smallPhone(0, 80)};

  display: flex;
  gap: ${({ theme }) => theme.ratio.smallPhone(10, 218)};
`;

export const LinksContainer = styled.section`
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
