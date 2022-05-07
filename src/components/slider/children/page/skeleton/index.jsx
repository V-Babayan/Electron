import { useMedia } from "hooks";

import * as Styled from "./styled";

const PageSkeleton = () => {
  const isTablet = useMedia("tablet");

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
