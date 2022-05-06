import styled from "styled-components";
import { Skeleton } from "styles";

const ImageSkeleton = styled(Skeleton)`
  height: 63%;
`;

const TitleSkeleton = styled(Skeleton)`
  height: 24px;

  margin-bottom: auto;
`;

const PriceSkeleton = styled(Skeleton)`
  height: 24px;

  margin-bottom: 20px;
`;

export { ImageSkeleton, TitleSkeleton, PriceSkeleton };
