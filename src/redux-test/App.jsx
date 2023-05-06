import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch({ type: "increase" });
  };

  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };

  const showCounterHandler = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <main>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={increaseHandler}>Increment</button>
        <button onClick={decreaseHandler}>Decrement</button>
      </div>
      <button onClick={showCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default App;
