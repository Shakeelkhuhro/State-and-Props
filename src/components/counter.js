import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count:  using {count} (state)</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;
