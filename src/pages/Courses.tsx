/*
 * @Author: 崔浩然
 * @Email：cuihaoran@hualala.com
 * @Date: 2022-08-02 10:57:16
 * @Description: 页面/组件/功能的描述
 * @FilePath: /hr-react-web/src/pages/Courses.tsx
 */
import React from 'react';

//typeof B = typeof a & A;

const initialState = { count: 0 };
type ACTIONTYPE = { type: 'increment'; payload: number } | { type: 'decrement'; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - Number(action.payload) };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>+</button>
    </>
  );
}
export default Counter;
