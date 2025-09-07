import './App.css'

function App() {

    // ⁣1. Event Handlers
    function handleClick() {
        alert('Button Clicked!');
    }

    // 2. SyntheticEvents
    function handleChange(event) {
        console.log('Typed value : ', event.target.value);
        console.log("Event Type : ", event.type); // "change"
        console.log(event); // SyntheticEvent object
    }

    // 3. Event Binding
    const label = "click me";
     function handle() {
         console.log("You clicked:", label);
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
                <input 
                    type="text" 
                    placeholder='Type something...'
                    onChange={handleChange}
                />
                {/* 
                    Explanation:
                        - When you type into the input, React creates a SyntheticEvent and passes it to handleChange.
                        * event.target.value → gives the text inside the input.
                        * event.type → tells you what kind of event it is (like "change", "click"). event.type → "change".
                        👉 You don’t need to worry about cross-browser issues — React’s SyntheticEvent handles it.
                */}

            <hr />    

            {/* ⁡⁢⁣⁡⁢⁣⁣3. Event Binding⁡⁡ */}
                {/* Example 1: Inline Arrow Function */}
                    <button onClick={() => console.log("clicked inline....")}>
                        click me    
                    </button>    
                    {/* 
                        Explanation:
                            - Here, we use an inline arrow function for the onClick handler.
                            * This is useful for simple actions or when you need to pass parameters.
                            * Simple, but creates a new function on every render.
                            - Okay for small apps, but less efficient for very frequent renders..
                            👉 For complex logic or performance-critical components, define the handler outside the JSX.
                    */}

                <br /><br />

                {/* Example 2: Separate Function */}
                    <button onClick={handle}>{label}</button>;    
                    {/* 
                        Explanation:
                            - handleClick is defined once per render and reused.
                            - More readable and scalable.
                    */}      


            <hr />    

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
            
        ⁡⁣⁢⁣2. SyntheticEvents:-⁡
            * Normally, browsers provide their own native events (like MouseEvent, KeyboardEvent).
            - React creates a cross-browser wrapper around the browser's native event called SyntheticEvent.

            * React wraps these in a SyntheticEvent, which is:
               <> A lightweight wrapper that normalizes differences across browsers.
               <> Works like native events but has consistent properties (e.g., event.target, event.type).

            * React reuses event objects (event pooling) for performance. After an event handler finishes, the event object may be cleared.
                <> That’s why if you access event asynchronously (like inside setTimeout), you may see it’s null.
                <> To avoid that → call event.persist().

        ⁡⁣⁢⁣3. Event Binding:-⁡
            - Event binding = attaching an event handler to a component.
            - Handlers often need access to props/state.
            - There are different ways to do binding:
               * Inline arrow functions.
               * Predefined handler functions.
               * Binding with parameters.

        ⁡⁣⁢⁣4. Event Parameters:-⁡
            - You can pass additional parameters to event handlers by using arrow functions or by defining a function that returns another function.
            - The first parameter of the event handler is always the event object, which contains information about the event that occurred.    
*/
