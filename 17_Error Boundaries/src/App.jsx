
import './App.css'
import BuggyComponent from './pages/BuggyComponent';

function App() {


  return (
        <>
            <h1>Error Boundaries</h1>
            <hr />
            <p>
            |__17.
            |── Error Boundaries
            | ├── Error Boundary Class  
            | ├── componentDidCatch     
            | ├── getDerivedStateFromError 
            | └── Error Boundary Libraries 
            </p>

            {/* <BuggyComponent /> //? This will throw an error */}

        </>

    )
}

export default App;

/* 
    ⁡⁢⁣⁣## 𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝗶𝗲𝘀⁡

 -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-   

    🧠 Can We Make Error Boundaries with Function Components?
    Short answer:
    ❌ No — React does NOT allow function components to be error boundaries.

    React’s Error Boundaries must be class components because they rely on two special lifecycle methods:
        - static getDerivedStateFromError()
        - componentDidCatch()

    * And function components don’t have lifecycle methods (they use hooks instead).
    * That’s why you cannot write an error boundary directly as a function component.

___________________________________________________________________________________________________________________________    

   🧠 ⁡⁣⁢⁡⁣⁢⁣What Are Error Boundaries?⁡⁡
        - Error Boundaries are components that catch JavaScript errors in their child components⁡ and display a ⁡⁣⁣⁢fallback⁡ ⁡⁣⁣⁢UI⁡ (instead of crashing the whole app).
        * React apps can crash if a component throws an error (e.g., due to a bug in rendering).
        - Normally, an error in one part of the UI can unmount the entire React app — bad for user experience.
        * Think of them like a try...catch block, but for React components.

__________________________________________________________________________________________________________________________

    • ⁡⁣⁢⁣Why Do We Need Error Boundaries?⁡
        - To prevent the entire app from crashing when a single component fails.
        - To provide a better user experience by showing a friendly error message.
        - To log errors for debugging and monitoring purposes.
       
        Example without Error Boundary:

        ⁡⁢⁢⁢import React from 'react';⁡

        ⁡⁢⁢⁢function BuggyComponent() {
            throw new Error("Something went wrong!");
            return <p>This will never render</p>; //? This line will never be reached. due to it react app will crash
          }
          
          function App() {
            return (
              <div>
                <h1>My App</h1>
                <BuggyComponent />  // App crashes completely 
              </div>
            );
          }⁡
            ⁡
        - Without error boundaries, this breaks your entire UI.
        - With error boundaries, you can show a friendly message like:
        - “Oops! Something went wrong. Please try again.”

__________________________________________________________________________________________________________________________

    • ⁡⁣⁢⁣𝗛𝗼𝘄 𝗗𝗼 𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝗶𝗲𝘀 𝗪𝗼𝗿𝗸?⁡⁡
        Error Boundaries:
            - Catch errors during render, lifecycle methods, and constructors of child components.
            - Do not catch:
                > Event handler errors (you need try/catch manually)
                > Asynchronous errors (like setTimeout, fetch)
                > Server-side rendering errors

__________________________________________________________________________________________________________________________

    ^ While you can’t write your own error boundary as a function component, you can still use them in function-based apps — you just wrap your function components inside a class-based error boundary.


    🏆 ⁡⁢⁣⁣𝗔𝗹𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝘃𝗲: 𝗨𝘀𝗲 𝗮 𝗟𝗶𝗯𝗿𝗮𝗿𝘆 (𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻-𝗙𝗿𝗶𝗲𝗻𝗱𝗹𝘆)⁡

        - Libraries like react-error-boundary allow you to use a hook-like pattern and feel like a function component:

    ⁡⁢⁢⁢import { ErrorBoundary } from "react-error-boundary";

    function Fallback({ error }) {
        return <p style={{ color: "red" }}>Error: {error.message}</p>;
    }

    function BuggyComponent() {
        throw new Error("Crash!");
    }

    function App() {
        return (
            <ErrorBoundary FallbackComponent={Fallback}>
                <BuggyComponent />
            </ErrorBoundary>
        );
    }⁡


    ✅ No need to write class components manually.
    ✅ Works nicely in modern function-component-based apps.

    [ Approach                             | Function Component Friendly? | Notes                                           ]
    [ ------------------------------------ | ---------------------------- | ---------------------------------------------   ]
    [ **Manual Error Boundary**            | ❌ No                        | Must use a class component                      ]
    [ **Library (`react-error-boundary`)** | ✅ Yes                       | Simplest way to use in modern React apps        ]
    [ **Hooks**                            | ❌ No                        | React has no `useErrorBoundary` built-in hook   ]


___________________________________________________________________________________________________________________________

    1️⃣ ⁡⁣⁢⁣𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝘆 𝗖𝗹𝗮𝘀𝘀 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁⁡
___________________________________________________________________________________________________________________________

    4️⃣ ⁡⁣⁢⁣𝗘𝗿𝗿𝗼𝗿 𝗕𝗼𝘂𝗻𝗱𝗮𝗿𝘆 𝗟𝗶𝗯𝗿𝗮𝗿𝗶𝗲𝘀⁡
        - You don’t always need to write error boundaries manually.
        - Some libraries provide pre-made ones:
            > react-error-boundary (by Kent C. Dodds)
            > Sentry (for error logging + boundary)
        Example with react-error-boundary:
*/
