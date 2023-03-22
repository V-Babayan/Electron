import { useCallback, useState } from "react";

import { useDispatch } from "react-redux";
import { addElement, changeElementCount } from "../redux/cartSlice";

import { indexOfCart } from "../helpers/indexOfCart";
import { addProductToCart, changeCountInCart, getCart } from "../http";

export const useChangeElementCount = (product, changingBy = 1) => {
  const dispatch = useDispatch();
  const [isProcessed, setIsProcessed] = useState(false);

  const handler = useCallback(() => {
    setIsProcessed(true);
    getCart()
      .then(async (cart) => {
        const index = indexOfCart(cart, product.id);

        try {
          if (index !== false) {
            const data = await changeCountInCart(
              cart[index].id,
              product,
              cart[index].count + changingBy
            );
            dispatch(changeElementCount({ index, count: data.count }));
          } else {
            const data = await addProductToCart({ product, count: 1 });
            dispatch(addElement(data));
          }
        } catch (e) {
          console.log(e);
        } finally {
          console.log("item add to cart");
        }
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setIsProcessed(false);
      });
  }, [product, changingBy, dispatch]);

  return [handler, isProcessed];
};
