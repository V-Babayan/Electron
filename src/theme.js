import { createGlobalStyle } from "styled-components";
import { devices } from "./helpers";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/Poppins-Regular') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/Poppins-Medium') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    src: url('./assets/fonts/Poppins-SemiBold') format('woff2'),
  }
  @font-face {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/Poppins-Bold') format('woff2'),
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  table, tbody {
    border-spacing: 0;
  }
  th {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  q::after,
  q::before {
    content: '';
  }

  button {
    background: none;
    appearance: none;
    cursor: pointer
  }

  body,
  html {
    font-family: 'Poppins', sans-serif;
    background: #f5f5f5;
    width: 100%;
    height: 100vh
  }

  body{
    font-size: 16px;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    gap: ${({ theme }) => theme.ratio(10, 30, "mobileS")};
  }

  main {
    padding: 0 ${({ theme }) => theme.ratio(5, 59, "mobileS")};
    flex: 1 1 auto;
  }
`;

const theme = {
  color: {
    blue: "#003f62",
    lightblue: "#87bcd9",
    orange: "#a76906",
    red: "#c33131",
    grey: "#a9a9a9",
  },

  media(deviceType) {
    return `min-width: ${devices[deviceType].size}px`;
  },

  ratio(start, devide, deviceType) {
    if (matchMedia("(max-width: 1440px)").matches)
      return `calc(${start}px + ${devide} * (100vw - ${devices[deviceType].size}px) / ${
        1440 - devices[deviceType].size
      })`;
    return start + devide + "px";
  },
};

export default theme;
