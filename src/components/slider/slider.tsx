import React, {
  ElementType,
  FC,
  ReactNode,
  UIEvent,
  useRef,
  useState,
} from "react";

import { Control } from "./children";

import * as Styled from "./styled";

type SliderProps = {
  children?: ReactNode[];
  list?: boolean;
  Skeleton: ElementType;
};

const Slider: FC<SliderProps> = ({ children, list, Skeleton }) => {
  const [page, setPage] = useState(0);
  const containerRef = useRef<HTMLUListElement>(null);

  const scrollHandler = (e: UIEvent<HTMLUListElement>) => {
    const changingPage =
      Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth) -
      page;
    changingPage && setPage(prev => prev + changingPage);
  };

  if (!children.length) {
    return <Skeleton />;
  }

  return (
    <Styled.Wrapper>
      <Styled.Container onScroll={scrollHandler} ref={containerRef}>
        {children}
      </Styled.Container>
      <Styled.Controls $list={list ? true : undefined}>
        {[...Array(children.length)].map((_, index) => (
          <Control
            key={index}
            containerRef={containerRef}
            pageNumber={index}
            active={index === page}
          />
        ))}
      </Styled.Controls>
    </Styled.Wrapper>
  );
};

export { Slider };
