import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0,
    },
    reducers: {
        setCount(state, action: PayloadAction<number>) {
            state.count = action.payload;
        },
    },
});

export const { setCount } = counterSlice.actions;

export default counterSlice.reducer;
