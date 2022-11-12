import React, { FC, useMemo } from "react";

import { useMedia } from "~/hooks";

import { CardSkeleton } from "./card/skeleton";

import { ProductList } from "./styled";

const ListSkeleton: FC = () => {
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
      {cards.map(cardId => (
        <CardSkeleton key={cardId} />
      ))}
    </ProductList>
  );
};

export { ListSkeleton };
