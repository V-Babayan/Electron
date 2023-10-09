import { createGlobalStyle } from "styled-components";

import { EDeviceNames } from "~/helpers";

export const GlobalStyles = createGlobalStyle<{ isLargeDisplay: boolean }>`
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
    cursor: pointer;
  }

  body,
  html {
    font-family: 'Poppins', sans-serif;
    background: #f5f5f5;
    width: 100%;
    height: 100vh;
  }

  body{
    font-size: 16px;
  }

  #root {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    gap: ${({ theme }) => theme.ratio(10, 30, EDeviceNames.mobileS)};
  }

  main {
    padding: 0 ${({ theme }) => theme.ratio(5, 59, EDeviceNames.mobileS)};
    flex: 1 1 auto;
  }
`;
