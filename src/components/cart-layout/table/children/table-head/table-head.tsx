import React, { FC, memo } from "react";

import { useMedia } from "~/hooks";

import * as Styled from "./styled";

const TableHead: FC = () => {
  const isMobile = useMedia("mobileL");

  return (
    isMobile && (
      <Styled.Thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th />
        </tr>
      </Styled.Thead>
    )
  );
};

export default memo(TableHead);
