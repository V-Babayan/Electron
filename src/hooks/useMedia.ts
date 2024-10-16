import { useEffect, useState } from "react";
import { devices } from "~/helpers";

export const useMedia = (deviceType: keyof typeof devices) => {
  const mediaQuery = window.matchMedia(`(min-width: ${devices[deviceType]}px)`);
  const [media, setMedia] = useState(() => mediaQuery.matches);

  useEffect(() => {
    const changeHandler = () => setMedia((prev) => !prev);

    mediaQuery.addEventListener("change", changeHandler);

    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, [mediaQuery]);

  return media;
};
