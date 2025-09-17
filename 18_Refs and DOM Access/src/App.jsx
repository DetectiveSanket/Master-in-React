
import './App.css'
import Timer from './components/Timer';
import UseCaseA from './components/UseCaseA';
import UseCaseB from './components/UseCaseB';
import UseRefHook from './components/UseRef_Hook';

function App() {
 

  return (
        <>
            <h1>Refs and DOM Access</h1>
            <p>
                |__18.
                |── Refs and DOM Access
                | ├── useRef Hook           
                | ├── Ref Forwarding        
                | ├── Callback Refs         
                | └── DOM Manipulation      
            </p>

            <hr />

            {/* UseCase A */}
            <UseCaseA />

            <hr />

            {/* UseCase B */}
            <UseCaseB />

            <hr />



            {/* ⁡⁢⁣⁣1. useRef Hook⁡ */}
            <UseRefHook />

            <hr />
            {/* Timer example */}
            <Timer />
        </>
    )
}

export default App;


/* 
    ⁡⁢⁣⁣## 𝗥𝗲𝗳𝘀 𝗮𝗻𝗱 𝗗𝗢𝗠 𝗔𝗰𝗰𝗲𝘀𝘀⁡
__________________________________________________________________________________________

    ⁡⁣⁢⁣• 𝗠𝗮𝗶𝗻 𝗨𝘀𝗲𝘀 𝗰𝗮𝘀𝗲𝘀 𝗼𝗳 𝗥𝗲𝗳𝘀:⁡
        A) ⁡⁣⁣⁢Persisting values across renders without causing re-renders⁡.
        B)⁡⁣⁣⁢ Accessing and manipulating DOM elements directly.⁡

    • ⁡⁣⁢⁣Why Use Refs?⁡
        - In React, the UI is typically updated through state changes, which trigger re-renders.
        - However, there are scenarios where you need to interact with the DOM directly or maintain values that shouldn’t cause a re-render.
        - Refs provide a way to do this while keeping your components functional and declarative.

    🔹⁡⁣⁢⁣What is a Ref?⁡
        - it return a mutable ⁡⁣⁣⁢object⁡ which holds a ⁡⁣⁣⁢.current property⁡
        * A Ref (short for “reference”) is like a pointer to a DOM element or a value.
        - In React, you create refs using the useRef hook (for function components).
        - Unlike state, updating a ⁡⁣⁣⁢ref doesn’t re-render the component⁡.
        - You can use refs to access DOM elements directly, for example, to focus an input field.
        - Refs can also hold any mutable value that you want to persist across renders without causing re-renders.
        - Common use cases include managing focus, text selection, or integrating with third-party libraries that require direct DOM manipulation.

    📌 ⁡⁢⁣⁣Topics in This Unit⁡
        1⁡⁣⁢⁣. useRef Hook⁡ 
            - Lets you hold a reference to a DOM element or a value.
            - Commonly used to:
                <> Access input fields (focus, value, etc.).
                <> Store mutable values that shouldn’t trigger re-renders.   
*/
