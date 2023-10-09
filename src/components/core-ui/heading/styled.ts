import styled from "styled-components";

import { EDeviceNames } from "~/helpers";
import { Skeleton } from "~/styles/";

const Heading = styled.h5`
  font-weight: 600;
  font-size: ${({ theme }) => theme.ratio(20, 8, EDeviceNames.mobileS)};
  line-height: 1.5;

  margin-bottom: ${({ theme }) => theme.ratio(15, 40, EDeviceNames.mobileS)};
  color: ${({ theme }) => theme.color.blue};
`;

const HeadingSkeleton = styled(Skeleton)`
  height: ${({ theme }) => theme.ratio(20, 8, EDeviceNames.mobileS)};
  width: 250px;

  margin-bottom: ${({ theme }) => theme.ratio(15, 40, EDeviceNames.mobileS)};
`;

export { Heading, HeadingSkeleton };
