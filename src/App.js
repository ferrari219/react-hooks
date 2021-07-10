import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const reducer = (state, action) => {
  switch (action) {
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
      <button onClick={() => dispatch(INCREMENT)}>Add</button>
      <button onClick={() => dispatch(DECREMENT)}>Remove</button>
    </>
  );
};

export default App;
