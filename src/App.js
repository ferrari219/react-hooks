import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Add</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Remove</button>
    </>
  );
};

export default App;
