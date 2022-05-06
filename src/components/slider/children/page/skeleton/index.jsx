import * as Styled from "./styled";

const PageSkeleton = () => {
  return (
    <Styled.Container>
      <Styled.PageLeft>
        <Styled.HeadingSkeleton />
        <Styled.HeadingSkeleton />
      </Styled.PageLeft>

      <Styled.ImageSkeleton />
    </Styled.Container>
  );
};

export { PageSkeleton };
