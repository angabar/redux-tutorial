import { combineReducers } from "redux";

import appReducer from "./redux/reducers";

export type reduxStoreType = {
    appReducer: {
        count: number;
    };
};

export const store = combineReducers({ appReducer });
