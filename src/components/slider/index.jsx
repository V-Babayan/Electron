import React, { useRef, useState } from "react";

import { Control } from "./children";

import * as Styled from "./styled";

const Slider = ({ children, list }) => {
  const [page, setPage] = useState(0);
  const containerRef = useRef();

  const scrollHandler = (e) => {
    const changingPage = Math.round(e.target.scrollLeft / e.target.clientWidth) - page;
    changingPage && setPage((prev) => prev + changingPage);
  };

  return (
    <Styled.Wrapper>
      <Styled.Container
        onScroll={scrollHandler}
        ref={containerRef}>
        {children}
      </Styled.Container>
      <Styled.Controls list={list ? "true" : undefined}>
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
