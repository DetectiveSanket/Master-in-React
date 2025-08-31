import React, { useReducer } from 'react'

function reducer(state , action) {

    switch(action.type) {
        case "increment": return {count : state.count + 1};
        case "decrement": return {count : state.count - 1};
        default: return state;
    }
}


function UseReducerHook() {

    const [state , dispatch] = useReducer(reducer , { count: 0 });

    return (
        <div>
            <hr />
            <h4>useReducer Hook</h4>

            <p>{state.count} </p>
            <button onClick={() => dispatch({type: "increment"})}> + </button>
            <button onClick={() => dispatch({type: "decrement"})}> - </button>
        </div>
    )
}

export default UseReducerHook;

/* 
    # useReducer Hook
        An alternative to useState for complex state logic.
            - Similar to Redux style reducers.
            - Good when state changes are based on actions instead of simple updates.
*/