import { SET_COUNT } from "./constants";

export const setCount = (count: number) => {
    return {
        type: SET_COUNT,
        payload: count,
    };
};
