import { useEffect, useRef, useState } from "react";

export const useHover = <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false);

  const targetElementRef = useRef<T>(null);

  const onMouseEnterHandle = () => {
    setIsHover(true);
  };
  const onMouseLeaveHandle = () => {
    setIsHover(false);
  };

  useEffect(() => {
    // add this variable for cleanup function
    const targetElement = targetElementRef.current;

    if (!(targetElement && targetElement.addEventListener)) return;

    targetElementRef.current.addEventListener("mouseenter", onMouseEnterHandle);
    targetElementRef.current.addEventListener("mouseleave", onMouseLeaveHandle);
    return () => {
      targetElement.removeEventListener("mouseenter", onMouseEnterHandle);
      targetElement.removeEventListener("mouseleave", onMouseLeaveHandle);
    };
  }, []);

  return { hover: isHover, ref: targetElementRef };
};
