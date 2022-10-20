import { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";
import { decrement, increment } from "../counter/slice";

// Timer middleware that dispatch on 1sec interval
export const timer = ({ dispatch, getState }: MiddlewareAPI) => {
  setInterval(() => {
    const rootState = getState() as RootState;

    const counter = rootState.counter.value;

    if (counter < 10 && counter >= 0) {
      dispatch(increment());
    }

    if (counter < 0) {
      dispatch(decrement());
    }
  }, 1000);

  return (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    next(action);
  };
};
