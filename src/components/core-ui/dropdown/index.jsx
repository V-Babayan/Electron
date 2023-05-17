import { useHover } from "hooks";

import * as Styled from "./styled";

const Dropdown = ({ children, overlay }) => {
  const { hover, ref } = useHover();

  return (
    <Styled.DropContainer ref={ref}>
      {children} {hover && overlay}
    </Styled.DropContainer>
  );
};

export { Dropdown };
