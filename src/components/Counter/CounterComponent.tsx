/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter">
        <h1>React Counter</h1>
        <span className="counter_output">{count}</span>
        <div className="btn_container">
          <button className="control_btn" onClick={increase}>
            +
          </button>
          <button className="control_btn" onClick={decrease}>
            -
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
