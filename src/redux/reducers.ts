import { Action } from "redux";

import { SET_COUNT } from "./constants";

const initialState = {
    count: 0,
};

const appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...initialState,
                count: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
