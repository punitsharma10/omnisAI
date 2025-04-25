import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./Components/ui/provider";
import { Provider as ReduxStore } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter>

        <Provider>
          <App />
        </Provider>

    </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
