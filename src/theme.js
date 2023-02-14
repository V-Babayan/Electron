import { createGlobalStyle } from "styled-components";

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
  }

  main {
    padding: 0 ${({ theme }) => theme.ratio.smallPhone(5, 59)}
  }
`;

const theme = {
  primary: {
    orange: "#eda415",
  },

  media: {
    MaxLargeDesctop: "(max-width: 1440px)",
    MinLargeDesctop: "(min-width: 1440px)",

    MaxDesctop: "(max-width: 1200px)",
    MinDesctop: "(min-width: 1200px)",

    MaxNotebook: "(max-width: 991.98px)",
    MinNotebook: "(min-width: 992px)",

    MaxTablet: "(max-width: 767.98px)",
    MinTablet: "(min-width: 768px)",

    MaxMobile: "(max-width: 575.98px)",
    MinMobile: "(min-width: 576px)",

    MaxSmallMobile: "(max-width: 479.98px)",
    MinSmallMobile: "(min-width: 480px)",
  },

  color: {
    blue: "#003f62",
    lightblue: "#87bcd9",
    orange: "#eda415",
    red: "#c33131",
    grey: "#a9a9a9",
  },

  ratio: {
    smallPhone(start, devide) {
      return `calc(${start}px + ${devide} * (100vw - 320px) / 1120)`;
    },
    phone(start, devide) {
      return `calc(${start}px + ${devide} * (100vw - 480px) / 980)`;
    },
    largePhone(start, devide) {
      return `calc(${start}px + ${devide} * (100vw - 580px) / 880)`;
    },
    tablet(start, devide) {
      return `calc(${start}px + ${devide} * (100vw - 780px) / 680)`;
    },
    smallNotebook(start, devide) {
      return `calc(${start}px + ${devide} * (100vw - 990px) / 470)`;
    },
  },
};

export default theme;
