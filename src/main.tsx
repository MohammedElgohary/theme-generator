import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import Root from "./app/design/layout/root/root";
import { Provider } from "react-redux";

import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root>
        <App />
      </Root>
    </Provider>
  </React.StrictMode>
);
