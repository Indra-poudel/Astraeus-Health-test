import { RootState } from "../index";

// Selector for counter value
export const selectCounterValue = (state: RootState) => state.counter.value;
export const selectStepValue = (state: RootState) => state.counter.step;
