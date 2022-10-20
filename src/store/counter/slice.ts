import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum COUNTER_ACTION_TYPE {
  INCREASE = "increase",
  DECREASE = "decrease",
}

export type CounterReduxState = {
  value: number;
  step: number;
};

// Initial Value for counter slice
const initialState: CounterReduxState = {
  value: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction) => {
      state.value = state.value + state.step;
    },
    decrement: (state, action: PayloadAction) => {
      state.value = state.value - state.step;
    },
    changeStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, changeStep } = counterSlice.actions;

export default counterSlice.reducer;
