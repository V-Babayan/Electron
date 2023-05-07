import styled from "styled-components";
import { Skeleton } from "styles";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 15px;

  margin-bottom: ${({ theme }) => theme.ratio(106, 62, "mobileS")};

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex-direction: row;
    justify-content: space-between;

    padding: ${({ theme }) =>
      `0 ${theme.ratio(20, 120, "tablet")} 0 ${theme.ratio(10, 100, "tablet")}`};
    margin-bottom: ${({ theme }) => theme.ratio(16, 36, "mobileS")};
  }
`;

const PageLeft = styled.div`
  align-self: stretch;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex: 0 0 ${({ theme }) => theme.ratio(270, 80, "tablet")};

    margin-top: ${({ theme }) => theme.ratio(28, 38, "tablet")};
    height: 208px;
  }
`;

const HeadingSkeleton = styled(Skeleton)`
  width: 100%;
  height: ${({ theme }) => theme.ratio(20, 24, "mobileS")};
`;

const ImageSkeleton = styled(Skeleton)`
  height: ${({ theme }) => theme.ratio(290, 453, "mobileS")};
  width: ${({ theme }) => theme.ratio(300, 450, "mobileS")};

  @media screen and (${({ theme }) => theme.media("tablet")}) {
    flex: 0 0 40%;

    height: ${({ theme }) => theme.ratio(285, 75, "tablet")};
    width: 100%;
  }
`;

export { Container, ImageSkeleton, PageLeft, HeadingSkeleton };
