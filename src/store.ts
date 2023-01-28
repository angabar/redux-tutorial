import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./redux/reducers";

export type reduxStoreType = {
    counterReducer: {
        count: number;
    };
};

export const store = configureStore({
    reducer: {
        counterReducer,
    },
});
