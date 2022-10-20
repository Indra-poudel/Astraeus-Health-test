import React, { ChangeEvent, useEffect } from "react";
import "./App.css";
import { STEPS } from "./constants";
import { useAppDispatch, useAppSelector } from "./store";
import { selectCounterValue, selectStepValue } from "./store/counter/selector";
import { changeStep, decrement, increment } from "./store/counter/slice";

function App() {
  const counterValue = useAppSelector(selectCounterValue);
  const stepValue = useAppSelector(selectStepValue);
  const dispatch = useAppDispatch();

  // Run once component is mounted
  useEffect(() => {
    console.log("App mounted at", Date());
  }, []);

  // Show alert once counter reach to 20
  useEffect(() => {
    if (counterValue > 20) {
      alert("Your counter reach to 20");
    }
  }, [counterValue]);

  const handleDecrease = () => {
    dispatch(decrement());
  };

  const handleIncrease = () => {
    dispatch(increment());
  };

  const handleChangeStep = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeStep(parseInt(event.target.value)));
  };

  return (
    <div className="wrapper">
      <h2 className="title">
        Astraeus Health's test for Full-stack TypeScript React Redux Node
        engineer.
      </h2>

      <div className="step-wrapper">
        <label className="step-label" htmlFor="step">
          Choose a increment and decrement step:
        </label>
        <select id="step" onChange={handleChangeStep}>
          {STEPS.map((step) => (
            <option key={step} value={step} defaultValue={stepValue}>
              {step}
            </option>
          ))}
        </select>
      </div>
      <div className="counter-wrapper">
        <button className="button" onClick={handleIncrease}>
          +
        </button>
        <div className="counter-value">{counterValue}</div>
        <button className="button" onClick={handleDecrease}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
