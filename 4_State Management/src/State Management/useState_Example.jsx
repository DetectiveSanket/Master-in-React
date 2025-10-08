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
    ⁡⁢⁣⁣# Details Information⁡
    ? https://react.dev/reference/react/useState

    ⁡⁣⁢⁣1. State Management in React (Data Management)⁡

        - State is data that changes over time in your React components.
        - When state changes, React re-renders the component (or part of it) to reflect the new data.

        * Props → external data passed into a component (read-only).
        * State → internal data owned by the component (mutable through React methods).


    2. ⁡⁣⁢useState Hook
        - The useState hook is the most common way to manage local state in a functional component.
        - It allows you to add state to your components without converting them to class components.
        - The useState hook returns an array with two elements: the current (initial value) state value and a function to update it.

       * Parameters 
            • ⁡⁣⁢⁣initialState⁡: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.

            • If you pass a function as initialState, it will be treated as an ⁡⁣⁣⁢initializer function.⁡ It should be pure, should take no arguments, and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state.

       * Returns 
            • useState returns an array with exactly two values:

        - The current state. During the first render, it will match the initialState you have passed.
        - The set function that lets you update the state to a different value and trigger a re-render.

       * Caveats 
        - useState is a Hook, so you can only c⁡⁣⁣⁢all it at the top level⁡ of your component or your own Hooks. You ⁡⁣⁣⁢can’t call it inside loops or conditions⁡. If you need that, extract a new component and move the state into it. 
        
        • ⁡⁣⁢⁣set functions⁡, like setSomething(nextState) 
             - The set function returned by useState lets you update the state to a different value and trigger a re-render. 
             - You can pass the next state directly, or a function that calculates it from the previous state:
             ex:- const [count, setCount] = useState(0); -> here set function is : setCount
        
        * Parameters 
            • ⁡⁣⁢⁣nextState⁡: The value that you want the state to be. It can be a value of any type, but there is a special behavior for functions.

            • If you pass a function as nextState, it will be treated as an ⁡⁣⁣⁢updater function⁡. It must be pure, should take the pending state as its only argument, and should return the next state. React will put your updater function in a queue and re-render your component. During the next render, React will calculate the next state by applying all of the queued updaters to the previous state. See an example below.

        * Returns
            - set functions do not have a return value.

        * Caveats
            - The ⁡⁣⁣⁢set function⁡ only updates the state variable for the next render. If you read the state variable after calling the set function, you will still get the old value that was on the screen before your call.


    3. ⁡⁢⁣⁣State Updates⁡

        - React state should never be ⁡⁣⁣⁢mutated directly⁡. You always use the ⁡⁣⁣⁢updater function.⁡
        - To mutate something directly means to change the existing object or array itself instead of creating a new copy.

        ⁡⁢⁣⁢Incorrect:⁡
        count = count + 1; // ❌ won't trigger re-render

        ⁡⁢⁣⁢Correct:⁡
        setCount(count + 1); // ✅ triggers re-render      
        
        ! Direct mutation (❌ wrong way)
        const [user, setUser] = useState({ name: "John", age: 25 });

        function updateAge() {
            user.age = 26;         // ❌ directly changing the state object
            setUser(user);         // ❌ React may not re-render because reference didn’t change
        }

        ! Immutable update (✅ correct way)
        const [user, setUser] = useState({ name: "John", age: 25 });

        function updateAge() {
            setUser(prev => ({ ...prev, age: 26 }));  // ✅ creates a new object reference
        }
        
    4. State with Objects

        - When your state is an object, you must copy the old state to preserve unchanged properties (because setState replaces, not merges).

        ⁡⁢⁢⁢const [user, setUser] = useState({ name: "John", age: 25 });

        const incrementAge = () => {
            setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
        };⁡

        ⁡⁢⁢⁢<p>{user.name} is {user.age} years old</p>
        <button onClick={incrementAge}>Increase Age</button>⁡

    5. State with Arrays

        - When storing arrays, treat them immutably:
        - Use map to update items.
        - Use filter to remove items.
        - Use spread [...arr, newItem] to add items.  
        
    7. Lifting State Up

        - When two sibling components need to share the same state, you "lift" the state to their closest parent and pass it down via props. 
        
        ex_
           ⁡⁢⁢⁢function ChildA({ value, onChange }) {
                return <input value={value} onChange={e => onChange(e.target.value)} />;
            }

            function ChildB({ value }) {
                return <p>You typed: {value}</p>;
            }

            function Parent() {
            const [shared, setShared] = useState("");

            return (
                    <div>
                    <ChildA value={shared} onChange={setShared} />
                    <ChildB value={shared} />
                    </div>
                );
            }⁡

*/