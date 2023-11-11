import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import { Provider } from "react-redux";

// import { Theme } from "styles/Theme";
import App from "./App";
// import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <Provider store={store}></Provider> */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
