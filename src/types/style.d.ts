import { devices } from "~/helpers";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      blue: string;
      lightblue: string;
      orange: string;
      red: string;
      grey: string;
    };
    isLargeDisplay: boolean;
    media(deviceType: keyof typeof devices): string;
    ratio(
      start: number,
      divide: number,
      deviceType: keyof typeof devices
    ): string;
  }
}
