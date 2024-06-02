import React from 'react'

//! typing the useReducer();
type StateType = {
    count: number;
}
// type ActionType = {
//     type: ('increment' | 'decrement' | 'reset');
//     payload: number;
// }

type UpdateAction = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetAction = {
    type:'reset';
}

//discriminated union in TS, reccommended for typing React.useReducers()
type CounterAction = UpdateAction | ResetAction;

const initialState = {count : 0};

function reducerfx(state:StateType, action:CounterAction) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialState;    
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = React.useReducer(reducerfx, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={()=>dispatch({type: 'increment', payload:10})}>
        Increment 10
      </button>
      <button onClick={()=>dispatch({type: 'decrement', payload:10})}>
        Decrement 10
      </button>
      <button onClick={()=>{dispatch({type:'reset'})}}>
        reset
      </button>
    </>
  )
}

export default Counter
