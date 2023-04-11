import styled from "styled-components";

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.ratio(0, 85, "mobileS")};

  padding: ${({ theme }) => theme.ratio(5, 17, "mobileS") + " " + theme.ratio(5, 59, "mobileS")};

  background: ${({ theme }) => theme.color.blue};

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex-wrap: nowrap;
  }
`;

const HeaderBottom = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.ratio(18, 80, "mobileS")};

  align-items: center;

  padding: 0 ${({ theme }) => theme.ratio(5, 59, "mobileS")};

  background: #f4f4f4;

  position: relative;
`;

const HeaderBottomHeading = styled.h5`
  display: block;
  margin-left: auto;

  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  color: ${({ theme }) => theme.color.blue};
`;

export { HeaderTop, HeaderBottom, HeaderBottomHeading };
