import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { global } from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={global} />
      <App />
    </Provider>
  </React.StrictMode>
);
