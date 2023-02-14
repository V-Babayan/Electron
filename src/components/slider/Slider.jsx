import React, { useState, useRef, useCallback } from "react";

import Page from "./Page";
import Control from "./Control";
import { Wrapper, Container, Controls } from "./Slider.styled";

const Slider = ({ pages = [] }) => {
  const [page, setPage] = useState(0);
  const containerRef = useRef();

  const scrollHandler = useCallback(
    (e) => {
      const changingPage = Math.round(e.target.scrollLeft / e.target.clientWidth) - page;
      changingPage && setPage((prev) => prev + changingPage);
    },
    [page]
  );

  return (
    <Wrapper>
      <Container
        onScroll={scrollHandler}
        ref={containerRef}>
        {pages.map((page, index) => (
          <Page
            key={page.id}
            page={page}
            index={index}
          />
        ))}
      </Container>
      <Controls>
        {[...Array(pages.length)].map((_, index) => (
          <Control
            key={index}
            active={page === index}
            containerRef={containerRef}
            index={index}
          />
        ))}
      </Controls>
    </Wrapper>
  );
};

export default Slider;
