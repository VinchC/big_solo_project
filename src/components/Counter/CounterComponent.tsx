/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>{count}</button>
      </div>
    </>
  );
}

export default Counter;
