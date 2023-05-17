import { useEffect, useRef, useState } from "react";

export const useHover = () => {
  const [isHover, setIsHover] = useState(false);

  const targetElementRef = useRef(null);

  useEffect(() => {
    // add this variable for cleanup function
    const currentTarget = targetElementRef.current;

    const onMouseEnterHandle = () => {
      setIsHover(true);
    };
    const onMouseLeaveHandle = () => {
      setIsHover(false);
    };

    targetElementRef.current.addEventListener("mouseenter", onMouseEnterHandle);
    targetElementRef.current.addEventListener("mouseleave", onMouseLeaveHandle);
    return () => {
      currentTarget.removeEventListener("mouseenter", onMouseEnterHandle);
      currentTarget.removeEventListener("mouseleave", onMouseLeaveHandle);
    };
  }, []);

  return { hover: isHover, ref: targetElementRef };
};
