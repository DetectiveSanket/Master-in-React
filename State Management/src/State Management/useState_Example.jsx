import React, { useState } from 'react'


//? ⁢initializer function Example

function createInitialTodos() {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: 'Item ' + (i + 1)
    });
  }
  return initialTodos;
}

function useState_Example() {

    // basic example of useState
    const [count, setCount] = useState(0);

    
    // Example of initializer function
    const [state , setState] = useState(createInitialTodos);

    //Adding text into initializer function content
    const [text, setText] = useState('');
    

    return (
        <>
            <h1>useState Example</h1>

            {/* // basic example of useState */}
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>

            {/* //Adding text into initializer function content */}
            <input 
                type="text" 
                value={text} // pass the initial state of useState
                onChange={e => setText(e.target.value)} // update the state of useState
            />

            <button
                onClick={() => {
                    setState("")
                    setState([{
                        id:state.length,
                        text:text
                    } , ...state])
                }}
            >
                Add The New Text Into initialize function list
            </button>

            <ul>  {/*  example of initializer function */}
                {
                    state.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default useState_Example;


/* 
    # Details Information

    1. State Management in React (Data Management)

        - State is data that changes over time in your React components.
        - When state changes, React re-renders the component (or part of it) to reflect the new data.

        * Props → external data passed into a component (read-only).
        * State → internal data owned by the component (mutable through React methods).


    2. useState Hook
        - The useState hook is the most common way to manage local state in a functional component.
        - It allows you to add state to your components without converting them to class components.
        - The useState hook returns an array with two elements: the current (initial value) state value and a function to update it.

        Parameters 
            • ⁡⁣⁢⁣initialState⁡: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

            • If you pass a function as initialState, it will be treated as an ⁡⁣⁣⁢initializer function.⁡ It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.
*/