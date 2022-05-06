import styled from "styled-components";
import { Skeleton } from "styles";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: ${({ theme }) =>
    `0 ${theme.ratio(20, 120, "tablet")} 0 ${theme.ratio(10, 100, "tablet")}`};
  margin-bottom: ${({ theme }) => theme.ratio(16, 36, "mobileS")};
`;

const PageLeft = styled.div`
  flex: 0 0 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 20px;
`;

const HeadingSkeleton = styled(Skeleton)`
  width: 100%;
  height: ${({ theme }) => theme.ratio(20, 24, "mobileS")};
`;

const ImageSkeleton = styled(Skeleton)`
  flex: 0 0 40%;

  height: 360px;
  width: 100%;
`;

export { Container, ImageSkeleton, PageLeft, HeadingSkeleton };
