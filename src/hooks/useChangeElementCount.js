import { useCallback, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addElement, changeElementCount } from "../redux/cartClicer";

import { indexOfCart } from "../helpers/indexOfCart";
import { addProductToCart, changeCountInCart } from "../http";

export const useChangeElementCount = (item, count = 1) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [isProcessed, setIsProcessed] = useState(false);

  const handler = useCallback(async () => {
    try {
      setIsProcessed(true);
      const index = indexOfCart(cart, item.id);

      if (index !== false) {
        changeCountInCart(cart[index].id, item, cart[index].count + count).then(() =>
          setIsProcessed(false)
        );
        dispatch(changeElementCount({ index, count: cart[index].count + count }));
      } else {
        addProductToCart({ product: item, count: count }).then(() => setIsProcessed(false));
        dispatch(
          addElement({
            product: item,
            count,
            id: `${cart.length > 0 ? Number(cart[cart.length - 1].id) + 1 : 1}`,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [cart, item, count]);

  return [handler, isProcessed];
};
