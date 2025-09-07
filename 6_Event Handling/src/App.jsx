import './App.css'

function App() {

    // ⁣1. Event Handlers
    function handleClick() {
        alert('Button Clicked!');
    }

    return (
        <>

            <h1>Event Handling</h1>
            <hr />
            <p>
                |__6.
                |── Event Handling
                | ├── Event Handlers        
                | ├── SyntheticEvents       
                | ├── Event Binding         
                | └── Event Parameters 
            </p>


            {/* ⁡⁢⁣⁣1. Event Handlers⁡ */}
                <button onClick={handleClick}>click me</button>
                {/* 
                    Explanation:
                        - onClick={handleClick} tells React: “When the button is clicked, call this function.”
                        * If you wrote onClick={handleClick()}, the function would run immediately during render — not what we want.
                        👉 Rule: Always pass a function reference, not a function call.
                */}

            <hr />

            {/* ⁡⁢⁣⁣2. ⁡⁢⁣⁣SyntheticEvents⁡ */}

            {/* ⁡⁢⁣⁣3. Event Binding⁡ */}

            {/* ⁡⁢⁣⁣4. Event Parameters⁡ */}
        </>
    )
}

export default App;

/* 
⁡⁢⁣⁣    # 𝗘𝘃𝗲𝗻𝘁 𝗛𝗮𝗻𝗱𝗹𝗶𝗻𝗴⁡

        - In React, event handling is similar to handling events in regular HTML, but with some differences in syntax and behavior.
        - React uses a synthetic event system that wraps native events to provide cross-browser compatibility and consistent behavior.
        - Event handlers in React are written in camelCase (e.g., onClick, onChange) instead of lowercase (e.g., onclick, onchange) as in HTML.
        - In React, you typically pass a function reference as the event handler rather than a string of code.

        ⁡⁣⁢⁣Basic syntax:⁡
            <element eventName={eventHandlerFunction} />
                - element is the HTML or React component that you want to attach the event handler to.
                - eventName is the name of the event you want to handle (e.g., onClick, onChange).
                - eventHandlerFunction is the function that will be called when the event occurs.

        ⁡⁣⁢⁣1. Event Handlers:-
            - In React, events are handled using attributes like onClick, onChange, onSubmit.
            - These attributes expect a function reference, not a function call.
            - React uses camelCase (onClick) instead of lowercase (onclick) used in plain HTML.⁡        
*/
