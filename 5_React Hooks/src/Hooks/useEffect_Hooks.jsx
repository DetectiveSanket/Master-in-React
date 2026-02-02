import React, { useEffect } from 'react'

function UseEffectHooks() {

    // Basic 
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

    // Dependency Array
    const count = 23;
    useEffect(() => {
        console.log("Runs only when count changes")
    },[count]); //-> dependency array

    return (
        <>
            <hr />
            <h4>useEffect Hook</h4>
        </>
    )
}

export default UseEffectHooks;

/*  
    #⁡⁢⁣⁣ ⁡⁢⁣⁣𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗛𝗼𝗼𝗸⁡⁡
        • useEffect is used to perform side effects in React components.
        • It can be used for data fetching, subscriptions, or manually changing the DOM.

        * Side effects = anything outside rendering: fetching data, subscriptions, DOM manipulation, timers.

        • ⁡⁣⁢⁣It replaces lifecycle methods in class components:⁡
            - componentDidMount → run once after render.
            - componentDidUpdate → run on updates.
            - componentWillUnmount → cleanup.


        •⁡⁣⁢⁣ Basic syntax:⁡
            ⁡⁢⁢⁢useEffect(() => {
                \\ code runs after every render
                like : console.log("Runs after first render and every update(if no dependency array is provided) or every re-render");
            });⁡

        • ⁡⁣⁢⁣Cleanup Functions⁡
            - To clean up resources (like intervals or event listeners), return a function inside useEffect:

            ⁡⁢⁢⁢useEffect(() => {
                const id = setInterval(() => console.log("tick"), 1000);
                return () => clearInterval(id); // cleanup on unmount or before next effect run
            }, []);⁡    

        • ⁡⁣⁢⁣React Component Lifecycle (Functional Components)⁡  
        
                ┌─────────────┐
                │  Component  │
                │   Mounts    │  ← First render → useEffect runs if [] or no array
                └─────┬───────┘
                      │
                      │ State or props change
                      ▼
                ┌─────────────┐
                │  Component  │
                │   Updates   │  ← Re-render → useEffect runs if deps changed
                └─────┬───────┘
                      │
          Component removed from DOM
                      ▼
                ┌─────────────┐
                │  Component  │
                │  Unmounts   │  ← Cleanup function (if any) runs
                └─────────────┘
            
        ⁡⁣⁢⁣> How useEffect fits into this⁡

            useEffect(() => {...}, [])
                - Runs once on mount
                - Cleanup runs on unmount

            useEffect(() => {...}, [dep])
                - Runs on mount and every time dep changes
                - Cleanup runs before effect re-runs and on unmount

            useEffect(() => {...}) (no array)
                - Runs after every render
                - Cleanup runs before each subsequent render

        • Dependency Array
            - [] → run once (on mount).
            - [dep1, dep2] → run when those variables change.
            - Omit → run after every render. 

                ex> 
                    ⁡⁢⁢⁢useEffect(() => {
                        console.log("Runs only when count changes");
                    }, [count]);⁡

            
            ⁡⁣⁢⁣-││- What does "mount" mean?⁡
                - In React, mounting is when a component is inserted into the DOM for the first time.
                - Mount → component appears in the DOM (first render).
                - Update → component re-renders because state/props changed.
                - Unmount → component is removed from the DOM.

                ex> 
                   ? With Class Components (old way)
                    Before hooks, you’d see this explicitly:

                    componentDidMount() {
                        runs once, when component first appears
                    }

                   ? With Functional Components using useEffect
                    When you write:

                    useEffect(() => {
                         console.log("Runs once when component is mounted");
                    }, []); // empty dependency array

                    -React calls this effect only after the first render, not on updates.
                    -This is equivalent to componentDidMount. 
                    
                  ⁡⁣⁢⁣Real-World Analogy⁡
                    - Think of a React component like opening a popup window:
                    - Mount → the window opens for the first time.
                    - Update → something changes inside the window (text changes, data updates).
                    - Unmount → you close the window entirely. 

*/


/* 
    ## ⁡⁢⁣⁢𝗖𝗼𝗺𝗽𝗹𝗲𝘅 𝗘𝘅𝗮𝗺𝗽𝗹𝗲 𝗼𝗳 𝘂𝘀𝗲𝗘𝗳𝗳𝗲𝗰𝘁 𝗛𝗼𝗼𝗸 𝘄𝗶𝘁𝗵 𝗗𝗮𝘁𝗮 𝗙𝗲𝘁𝗰𝗵𝗶𝗻𝗴⁡

    
import { useEffect, useState } from 'react'
import './App.css'

function App() {
    
    const [title , setTitle] = useState("");
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [change , setChange] = useState(false);

    useEffect(() => {
        if (change) {
            console.log("UseEffect is called because 'change' is true");
            async function fetchData() {
                try {
                    ->  Setting loading to true when a fetch starts
                    setLoading(true);
                    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    const result = data.slice(0, 10);
                    setTitle(result);
                    
                } catch (e) {
                    console.error(e);
                    setError(e.message);
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        }

    }, [ change ]);

  

  return (
        <>
            <div>
                <h1>Photos from API</h1>
                <div className="photo-grid">
                    {
                        loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            title.map((photo) => (
                                <div key={photo.id} className="photo">
                                    <p>{photo.title}</p>
                                    <p>{photo.id}</p>
                                </div>
                            ))
                        )
                    }
                </div>

                <button onClick={() => setChange(!change)}>Change State</button> 
                {change && <p>State Changed!</p>} 
            </div>
        </>
    )
}

export default App

*/