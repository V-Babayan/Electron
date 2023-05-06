import { useMedia } from "hooks";
import { useMemo } from "react";

import { ProductList } from "./styled";
import { CardSkeleton } from "./card/skeleton";

const ListSkeleton = () => {
  const isMobile = useMedia("mobile");
  const isTablet = useMedia("tablet");
  const isNotebook = useMedia("notebook");

  const cards = useMemo(() => {
    if (isNotebook) return [...Array(8).keys()];

    if (isTablet) return [...Array(6).keys()];

    if (isMobile) return [...Array(4).keys()];

    return [...Array(1).keys()];
  }, [isMobile, isTablet, isNotebook]);

  return (
    <ProductList>
      {cards.map((cardId) => (
        <CardSkeleton key={cardId} />
      ))}
    </ProductList>
  );
};

export { ListSkeleton };
