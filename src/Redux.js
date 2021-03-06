import React, {useReducer} from "react";

/**
 * THIS COMPONENT WILL BE EXPORTED AND WILL USE A REDUCER AND DISPATCH TO SEND OUT AN ACTION
 */

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'reset':
            return initialState;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            // A reducer must always return a valid state.
            // Alternatively you can throw an error if an invalid action is dispatched.
            return state;
    }
}

export default function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(
        reducer,
        initialState,
        { type: 'reset', payload: initialCount },
    );

    return (
        <>
        Count: {state.count}
        <button
            onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
            Reset
      </button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    );
}