import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";

const reduxStore = createStore(store);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
);

reportWebVitals();
