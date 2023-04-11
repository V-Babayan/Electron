import React from "react";
import { useMedia } from "hooks";

import * as Styled from "./styled";

const TableHead = () => {
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

export default TableHead;
