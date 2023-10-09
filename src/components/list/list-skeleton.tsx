import React, { FC, useMemo } from "react";

import { EDeviceNames } from "~/helpers";
import { useMedia } from "~/hooks";

import { CardSkeleton } from "./card";

import { ProductList } from "./styled";

const ListSkeleton: FC = () => {
  const isMobile = useMedia(EDeviceNames.mobile);
  const isTablet = useMedia(EDeviceNames.tablet);
  const isNotebook = useMedia(EDeviceNames.notebook);

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
