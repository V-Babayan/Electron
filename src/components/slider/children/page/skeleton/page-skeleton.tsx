import React, { FC } from "react";

import { EDeviceNames } from "~/helpers";
import { useMedia } from "~/hooks";

import * as Styled from "./styled";

const PageSkeleton: FC = () => {
  const isTablet = useMedia(EDeviceNames.tablet);

  return (
    <Styled.Container>
      <Styled.PageLeft>
        <Styled.HeadingSkeleton />
        {isTablet && <Styled.HeadingSkeleton />}
      </Styled.PageLeft>

      <Styled.ImageSkeleton />
    </Styled.Container>
  );
};

export { PageSkeleton };
