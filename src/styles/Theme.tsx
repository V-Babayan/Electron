import React, { FC, ReactNode } from "react";

import { ThemeProvider } from "styled-components";

import { devices } from "~/helpers";

import { GlobalStyles } from "./global-styles";

const theme = {
  color: {
    blue: "#003f62",
    lightblue: "#87bcd9",
    orange: "#a76906",
    red: "#c33131",
    grey: "#a9a9a9",
  },
  isLargeDisplay: false,

  media(deviceType: keyof typeof devices) {
    return `min-width: ${devices[deviceType]}px`;
  },

  ratio(start: number, divide: number, deviceType: keyof typeof devices) {
    if (this.isLargeDisplay) return start + divide + "px";

    return `calc(${start}px + ${divide} * (100vw - ${
      devices[deviceType]
    }px) / ${1440 - devices[deviceType]})`;
  },
};

type ThemeProps = { isLargeDisplay: boolean; children?: ReactNode };

const Theme: FC<ThemeProps> = ({ isLargeDisplay, children }) => {
  theme.isLargeDisplay = isLargeDisplay;

  return (
    <ThemeProvider theme={theme}>
      {/* Add isLargeDisplay props because this is memo component and don't rerender when this component rerender */}
      <GlobalStyles isLargeDisplay={isLargeDisplay} />

      {children}
    </ThemeProvider>
  );
};

export { Theme };
