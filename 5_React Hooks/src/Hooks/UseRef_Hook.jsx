import React from 'react'

function UseRefHook() {
    return (
        <div>
            <h1>useRef Hook</h1>
        </div>
    )
}

 export default UseRefHook;


/* 
⁡⁢⁣⁣    # 𝘂𝘀𝗲𝗥𝗲𝗳 𝗛𝗼𝗼𝗸⁡
        * It is a React hook that allows you to create a mutable reference that persists across re-renders of a functional component.
        * It is commonly used to access and manipulate DOM elements directly, store mutable values that do not trigger re-renders, and manage focus or text selection in input fields.
        - useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.


        Basic syntax:⁡
            const refContainer = React.useRef(initialValue);
                - refContainer is an object with a current property that can be used to store a mutable value.
                - initialValue is the initial value of the ref.
*/ 