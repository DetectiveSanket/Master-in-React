import React, { useEffect } from 'react'

function UseEffectHooks() {

    useEffect(() => {
        // console.log("runs after first render or on every update(if no dependency array is provided) or every re-render");
    })

    // Cleanup Functions
    useEffect(() => {
        // const id = setInterval(() => console.log("update") , 1000);
        // console.log("id : " , id);
        // Cleanup function to clear interval on unmount or before next effect run
        // return () => clearInterval(id);
    })

    //Dependency Array
    const count = 23;
    useEffect(() => {
        console.log("Runs only when count changes")
    },[count]); //-> dependency array

    return (
        <>
            <h4>useEffect Hook</h4>
        </>
    )
}

export default UseEffectHooks;

/*  
    # 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗛𝗼𝗼𝗸
        • useEffect is used to perform side effects in React components.
        • It can be used for data fetching, subscriptions, or manually changing the DOM.

        * Side effects = anything outside rendering: fetching data, subscriptions, DOM manipulation, timers.

        • It replaces lifecycle methods in class components:
            - componentDidMount → run once after render.
            - componentDidUpdate → run on updates.
            - componentWillUnmount → cleanup.


        • Basic syntax:
            ⁡⁢⁢⁢useEffect(() => {
                \\ code runs after every render
                like : console.log("Runs after first render and every update(if no dependency array is provided) or every re-render");
            });⁡

        • Cleanup Functions
            - To clean up resources (like intervals or event listeners), return a function inside useEffect:

            ⁡⁢⁢⁢useEffect(() => {
            const id = setInterval(() => console.log("tick"), 1000);
            return () => clearInterval(id); // cleanup on unmount or before next effect run
            }, []);⁡    

        • React Component Lifecycle (Functional Components)  
        
                ┌─────────────┐
                │  Component  │
                │   Mounts    │  ← First render → useEffect runs if [] or no array
                └─────┬───────┘
                      │
                      │ State or props change
                      ▼
                ┌─────────────┐
                │ Component   │
                │  Updates    │  ← Re-render → useEffect runs if deps changed
                └─────┬───────┘
                      │
          Component removed from DOM
                      ▼
                ┌─────────────┐
                │ Component   │
                │ Unmounts    │  ← Cleanup function (if any) runs
                └─────────────┘

        • Dependency Array
            - [] → run once (on mount).
            - [dep1, dep2] → run when those variables change.
            - Omit → run after every render. 

                ex> 
                    ⁡⁢⁢⁢useEffect(() => {
                        console.log("Runs only when count changes");
                    }, [count]);⁡

            
            -│- 
*/